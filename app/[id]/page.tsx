// pages/index.tsx
"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/invite';
import { pokemon } from '../styles/fonts';
import confetti from 'canvas-confetti';

// Typ dla zaproszenia
interface Invitation {
  name: string;
  location: string;
  date: string;
  time: string;
  shortcut: string;
  plusOne: boolean;
  osoba_towarzyszaca?: string | null;
}

export default function Home({ params }) {
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const shortcut = params.id;

  useEffect(() => {
    // Sprawdzamy czy shortcut istnieje zanim rozpoczniemy pobieranie danych
    if (!shortcut) return;

    // Funkcja do pobrania zaproszenia z bazy danych
    const fetchInvitation = async () => {
      try {
        const response = await fetch('/api');
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data && data.shortcut === shortcut) {
            setTimeout(() => confetti({
                          particleCount: 140,
                          spread: 100,
                          origin: { y: 1 },
                          colors: ['#ff0', '#f00', '#0f0', '#00f']
                        }), 500);
            setInvitation(data); // Ustawienie danych zaproszenia
          } else {
            //setError('Nie znaleziono zaproszenia');
          }
        } else {
          setError('Błąd podczas pobierania zaproszenia');
        }
      } catch (err) {
        console.error('Błąd podczas pobierania danych', err);
        setError('Błąd serwera');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitation();
  }, [shortcut]);

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
          {invitation ? (
            <>
              <p>Serdecznie zapraszam na osiemnaste urodziny</p>
              <h2><strong>{invitation.imie_nazwisko}</strong></h2>
              {/* Sprawdzenie, czy osoba może przyjść z osobą towarzyszącą */}
                            {invitation.plusOne ? (
                              invitation.osoba_towarzyszaca ? (
                                <p>wraz z: <strong>{invitation.osoba_towarzyszaca}</strong></p>
                              ) : (
                                <p>wraz z Osobą Towarzyszącą.</p>
                              )
                            ) : (
                              <></>
                            )}
              <p>Impreza odbędzie się w:</p>
              <h3><strong>{invitation.location}</strong></h3>
              <p>Data: <strong>{invitation.date}</strong></p>
              <p>Godzina: <strong>{invitation.time}</strong></p>
            </>
          ) : (
            <p>Nie znaleziono zaproszenia</p>
          )}
        </div>
      </div>
    </Layout>
  	/*<Layout>
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
  			<img
  				src="https://media.tenor.com/ZZIk4A2HY4sAAAAi/cockroach-spinning.gif"
  				alt="Waterfall Left"
  				style={{
  					position: 'absolute',
  					left: 0,
  					top: 0,
  					height: '100%',
  					width: 'auto',
  					zIndex: 20,
  					animation: 'waterfall-left 5s linear infinite'
  				}}
  			/>
  			<img
  				src="https://media.tenor.com/IJASx_rtZLkAAAAi/spinning-duck.gif"
  				alt="Waterfall Right"
  				style={{
  					position: 'absolute',
  					right: 0,
  					top: 0,
  					height: '100%',
  					width: 'auto',
  					zIndex: 21,
  					animation: 'waterfall-right 5s linear infinite'
  				}}
  			/>
  			<div style={{
  				position: 'relative',
  				zIndex: 1,
  				textAlign: 'center'
  			}}>
  				{invitation ? (
  						<p>Serdecznie zapraszam na osiemnaste urodziny</p>
  						<h2>{invitation.imie_nazwisko}</h2>
  						<p>Impreza odbędzie się w:</p>
  						<h3>{invitation.location}</h3>
  						<p>Data: {invitation.date}</p>
  						<p>Godzina: {invitation.time}</p>
  				) : (
  					<p>Nie znaleziono zaproszenia</p>
  				)}
  			</div>
  		</div>

  		<style jsx>{`
  		@keyframes waterfall-left {
  			0% { transform: translateY(-250%); }
  			100% { transform: translateY(200%); }
  		}
  		@keyframes waterfall-right {
  			0% { transform: translateY(-250%); }
  			100% { transform: translateY(200%); }
  		}
  		`}</style>
  	</Layout>*/
    /*<Layout>
      {invitation ? (
        <div className={pokemon.className} style={{ fontSize: '1.25rem' }}>
          <p>Serdecznie zapraszam na osiemnaste urodziny</p>
          <h2>{invitation.imie_nazwisko}</h2>
          <p>Impreza odbędzie się w:</p>
          <h3>{invitation.location}</h3>
          <p>Data: {invitation.date}</p>
          <p>Godzina: {invitation.time}</p>
        </div>
      ) : (
        <p>Nie znaleziono zaproszenia</p>
      )}
    </Layout>*/
  );
}


