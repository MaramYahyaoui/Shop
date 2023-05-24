import React from 'react'

export default function Flag() {
  return (
    <div style={{ position: 'relative' }}>
      <img src='assets/rec.png' style={{ width: '100%' ,}} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h6>Nouvelle collection</h6>
        <h1>Soyez différent à votre manière !</h1>
        <h2>Trouvez votre style unique.</h2>
      </div>
    </div>
  )
}

/*import React, { useEffect } from 'react';

export default function Flag() {
  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById('background-image');
      const scrollY = window.scrollY;
      img.style.transform = `translateY(${scrollY}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img id="background-image" src='assets/rec.png' style={{ position: 'fixed', top: 0, left: 0, width: '100%' }} />
      <div style={{ height: '100vh', paddingTop: '50vh', textAlign: 'center', color: 'white' }}>
        <h6>Nouvelle collection</h6>
        <h1>Soyez différent à votre manière !</h1>
        <h2>Trouvez votre style unique.</h2>
      </div>
    </div>
  );
}*/
/*import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
// Initialize AOS
AOS.init();


export default function Flag() {
  useEffect(() => {
    // Refresh AOS when the component mounts
    AOS.refresh();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img
        id="background-image"
        src='assets/rec.png'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1,
        }}
        data-aos="fade-up"
      />
      <div style={{ height: '100vh', paddingTop: '50vh', textAlign: 'center', color: 'white' }}>
        <h6 data-aos="fade-up">Nouvelle collection</h6>
        <h1 data-aos="fade-up">Soyez différent à votre manière !</h1>
        <h2 data-aos="fade-up">Trouvez votre style unique.</h2>
      </div>
    </div>
  );
}
*/


 