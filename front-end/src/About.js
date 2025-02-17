import { useEffect, useState } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching about data:', error));
  }, []);

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="about-container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About Us</h1>
      {aboutData.bio.map((paragraph, index) => (
        <p key={index} style={{ textAlign: 'left', marginBottom: '16px' }}>
            {paragraph}
        </p>
      ))}
      <img 
        src={aboutData.imageURL} 
        alt="Madison Phung" 
        style={{ width: '300px', borderRadius: '10px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default About;
