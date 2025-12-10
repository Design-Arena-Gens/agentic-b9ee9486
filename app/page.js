'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const prayerLines = [
    'ప్రియమైన ప్రభువా యేసుక్రీస్తూ',
    'ఈ రాత్రి నాకు విశ్రాంతి ఇవ్వండి',
    'నా కుటుంబాన్ని రక్షించండి',
    'నా హృదయంలో శాంతిని నింపండి',
    'నీ ప్రేమతో నన్ను ఆవరించండి',
    'రాత్రంతా నీ దూతలు కాపలా ఉండండి',
    'చీకటిని వెలుగుగా మార్చండి',
    'నిన్ను విశ్వసించి నిద్రపోతున్నాను',
    'నా ప్రాణం నీ చేతుల్లో ఉంది',
    'ఆమెన్'
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentLine((prev) => {
          if (prev >= prayerLines.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, prayerLines.length]);

  const handlePlay = () => {
    setCurrentLine(0);
    setIsPlaying(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoFrame}>
        {/* Background gradient */}
        <div style={styles.background}>
          {/* Cross symbol */}
          <div style={styles.crossContainer}>
            <div style={styles.cross}>✟</div>
          </div>

          {/* Prayer text */}
          <div style={styles.prayerContainer}>
            <h1 style={styles.title}>రాత్రి ప్రార్థన</h1>
            <h2 style={styles.subtitle}>Night Prayer to Jesus</h2>

            <div style={styles.prayerBox}>
              {prayerLines.map((line, index) => (
                <p
                  key={index}
                  style={{
                    ...styles.prayerLine,
                    opacity: isPlaying && index === currentLine ? 1 : 0.3,
                    transform: isPlaying && index === currentLine ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.5s ease',
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {!isPlaying ? (
              <button onClick={handlePlay} style={styles.playButton}>
                ▶ ప్రార్థన ప్రారంభించండి
              </button>
            ) : (
              <div style={styles.playingIndicator}>🙏 ప్రార్థన చేస్తున్నాము...</div>
            )}
          </div>

          {/* Bottom decoration */}
          <div style={styles.bottomText}>
            🕊️ యేసుక్రీస్తు దీవెనలు 🕊️
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    padding: '20px',
  },
  videoFrame: {
    width: '100%',
    maxWidth: '400px',
    aspectRatio: '9/16',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
  },
  background: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 20px',
    position: 'relative',
  },
  crossContainer: {
    position: 'absolute',
    top: '30px',
    opacity: 0.2,
  },
  cross: {
    fontSize: '120px',
    color: '#fff',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
  },
  prayerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '8px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '18px',
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  prayerBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '30px 20px',
    marginBottom: '30px',
    width: '100%',
    maxWidth: '340px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  prayerLine: {
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
    margin: '15px 0',
    fontWeight: '500',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  },
  playButton: {
    backgroundColor: '#fff',
    color: '#1e3c72',
    border: 'none',
    borderRadius: '30px',
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s',
  },
  playingIndicator: {
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
    animation: 'pulse 2s infinite',
  },
  bottomText: {
    fontSize: '18px',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  },
};
