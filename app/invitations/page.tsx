"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Typ dla zaproszenia
interface Invitation {
  imie_nazwisko: string;
  location: string;
  date: string;
  time: string;
  shortcut: string;
  plusOne: boolean;
  osoba_towarzyszaca?: string | null;
}

export default function InvitationsPage() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //const router = useRouter();

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await fetch('/api'); // Pobieramy wszystkie zaproszenia
        if (response.ok) {
          //console.log(response.json());
          const data = await response.json();
          console.log(data);
          if (data) {
          	setInvitations(data); // Ustawiamy zaproszenia
          }
        } else {
          setError('Błąd podczas pobierania zaproszeń');
        }
      } catch (err) {
        console.error('Błąd podczas pobierania danych', err);
        setError('Błąd serwera');
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, []);

  //console.log(invitations);

  // Funkcja do kopiowania linku do schowka
  const copyLinkToClipboard = (shortcut: string) => {
    const invitationUrl = `${window.location.origin}/${shortcut}`;
    navigator.clipboard.writeText(invitationUrl)
      .then(() => alert('Skopiowano link do schowka!'))
      .catch(err => console.error('Błąd kopiowania linku', err));
  };

  if (loading) {
    return <p>Ładowanie zaproszeń...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Lista zaproszonych osób</h1>
      {invitations.count >= 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {invitations.map(invitation => (
            <li key={invitation.shortcut} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
              {/* Przycisk do przejścia do zaproszenia */}
              <button
                onClick={() => router.push(`/${invitation.shortcut}`)}
                style={{
                  padding: '10px 15px',
                  fontSize: '16px',
                  marginRight: '10px',
                  backgroundColor: '#0070f3',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {invitation.imie_nazwisko}
              </button>
              
              {/* Przycisk do kopiowania linku */}
              <button
                onClick={() => copyLinkToClipboard(invitation.shortcut)}
                style={{
                  padding: '10px 15px',
                  fontSize: '16px',
                  backgroundColor: '#f3f3f3',
                  color: '#333',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Kopiuj link
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Brak zaproszeń do wyświetlenia.</p>
      )}
    </div>
  );
}

