import React from 'react';

export default function YourComponent() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(assets/6.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h6 style={{ color: 'white' }}>Nouvelle collection</h6>
      <h1 style={{ color: 'white' }}>Soyez différent à votre manière !</h1>
      <h2 style={{ color: 'white' }}>Trouvez votre style unique.</h2>
    </div>
  );
}
