"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Typ dla info
interface Info {
	location: string;
	date: string;
	count: number;
	time: string;
}

// Typ dla zaproszenia
interface Invitation {
  imie_nazwisko: string;
  shortcut: string;
  plusOne: boolean;
  osoba_towarzyszaca?: string | null;
}

export default function InvitationsPage() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [info, setInfo] = useState<Info[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchInvitations_Info = async () => {
      try {
        const response_info = await fetch('/api/info');
        if (response_info.ok) {
        	const dataa = await response_info.json();
        	//const data = [...Object.values(dataa)];
        	
        	const data = Array.isArray(dataa) ? dataa[0] : dataa;

        	setInfo(data);
        }
      
        const response_invitations = await fetch('/api/invitations'); // Pobieramy wszystkie zaproszenia
        if (response_invitations.ok) {
          const data = await response_invitations.json()
          
          setInvitations(data); // Ustawiamy zaproszenia
          
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

    fetchInvitations_Info();
  }, []);

  // Funkcja do kopiowania linku do schowka
  const copyLinkToClipboard = (shortcut: string) => {
    const invitationUrl = `${window.location.origin}/${shortcut}`;
    navigator.clipboard.writeText(invitationUrl).then(function() {
    	console.log("Copied");
    }, function(err) {
    	console.error("Could not copy text: ", err);
    });
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
      {invitations.length > 0 ? (
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
