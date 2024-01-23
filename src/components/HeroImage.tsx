// HeroImage.tsx
import React from 'react';
import './HeroImage.css'; // Import a separate CSS file for styling

const HeroImage: React.FC = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1511884642899-47a5e5b30438?w=1920&h=1080&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D';

  const heroStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
  };

  return (
    <section className="hero" style={heroStyle}>
      {/* You can add any additional content or components inside the hero section if needed */}
    </section>
  );
};

export default HeroImage;
