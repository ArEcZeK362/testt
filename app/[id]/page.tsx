// pages/index.tsx
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/invite';
import confetti from 'canvas-confetti';

// Typ dla Info
interface Info {
  location: string;
  date: string;
  time: string;
  count: number;
}

// Typ dla zaproszenia
interface Invitation {
  imie_nazwisko: string;
  shortcut: string;
  plusOne: boolean;
  osoba_towarzyszaca?: string | null;
}

// Typ dla propsów strony
interface HomeProps {
  invitation: Invitation | null;
  info: Info | null;
}

export default function Home({ invitation, info }: HomeProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (invitation) {
      setTimeout(() => {
        confetti({
          particleCount: 140,
          spread: 100,
          origin: { y: 1 },
          colors: ['#ff0', '#f00', '#0f0', '#00f']
        });
      }, 500);
      setLoading(false);
    } else {
      setError('Nie znaleziono zaproszenia');
      setLoading(false);
    }
  }, [invitation]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column'
      }}>
        {/* Spinner or loading animation */}
        <div className="spinner" style={{
          width: '50px',
          height: '50px',
          border: '6px solid #ccc',
          borderTop: '6px solid #333',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ marginTop: '20px', fontSize: '1.2rem', color: '#555' }}>Ładowanie zaproszenia...</p>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Layout>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center'
        }}>
          {invitation && info ? (
            <>
              <p>Serdecznie zapraszam na osiemnaste urodziny</p>
              <h2><strong>{invitation.imie_nazwisko}</strong></h2>
              {invitation.plusOne ? (
                invitation.osoba_towarzyszaca ? (
                  <p>wraz z: <strong>{invitation.osoba_towarzyszaca}</strong></p>
                ) : (
                  <p>wraz z Osobą Towarzyszącą.</p>
                )
              ) : null}
              <p>Impreza odbędzie się w:</p>
              <h3><strong>{info.location}</strong></h3>
              <p>Data: <strong>{info.date}</strong></p>
              <p>Godzina: <strong>{info.time}</strong></p>
            </>
          ) : (
            <p>Nie znaleziono zaproszenia</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

// getServerSideProps - pobiera dane po stronie serwera na podstawie parametrów
export async function getServerSideProps(context: any) {
  const { params } = context;
  const shortCut = params?.id;

  try {
    // Pobieranie informacji o wydarzeniu
    const responseInfo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/info`);
    const info = responseInfo.ok ? await responseInfo.json() : null;

    // Pobieranie zaproszenia na podstawie shortcut
    const responseInvitation = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/invitations`);
    const invitations: Invitation[] = await responseInvitation.json();
    const invitation = invitations.find(inv => inv.shortcut === shortCut) || null;

    return {
      props: {
        info,
        invitation
      }
    };
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    return {
      props: {
        info: null,
        invitation: null
      }
    };
  }
}

