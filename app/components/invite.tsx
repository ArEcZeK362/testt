// components/Layout.tsx
import React from 'react';
import { streetbomber } from '../styles/fonts';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{
      color: 'black',
      fontFamily: 'Arial, sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      padding: '20px',
      backgroundColor: '#3d9dfc',
    }}>
      <header style={{ marginBottom: '50px' }}>
        <h1 className={streetbomber.className} style={{ fontSize: '2.8rem', textAlign: 'center' }}>Zaproszenie na Osiemnastkę!</h1>
      </header>
      <main style={{
        fontSize: '1rem', 
        backgroundColor: '#8ec4fa', 
        padding: '30px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

