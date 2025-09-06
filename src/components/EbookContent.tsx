import { memo } from 'react';
import InstagramIcon from './InstagramIcon';

function EbookContent() {
  return (
    <div className="content">
      
      <h1 
        className="main-title text-5xl md:text-6xl font-bold leading-tight mb-4 font-engagement"
        style={{ 
          color: '#CEA049',
          fontSize: '48px',
          lineHeight: '1.1'
        }}
      >
        18 pasos hacia tu proyecto de vida
      </h1>
      
      <p className="text-lg mb-8 leading-relaxed" style={{ color: '#545454' }}>
        Autora: Belkis Urbina<br />
        <a 
          href="https://instagram.com/soybelkisurbina" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#CEA049', 
            textDecoration: 'underline',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <InstagramIcon width={16} height={16} className="mb-0.5" />
          @soybelkisurbina
        </a>
      </p>
      
      <h2 
        className="font-bold mb-4 font-engagement"
        style={{ 
          color: '#CEA049',
          fontSize: '30px'
        }}
      >
        ¿Qué encontrarás dentro?
      </h2>
      
      <div className="text-base leading-relaxed mb-8" style={{ color: '#545454' }}>
        🌟 <strong>Tu vida merece un nuevo comienzo</strong> 🌟<br />
        
        ¿Listo para descubrir tu propósito y dar forma a tus sueños?<br />
        El ebook de Belkis Urbina &ldquo;18 pasos hacia tu proyecto de vida&rdquo; es una guía transformadora que te ayudará a:<br />
        
        ✨ Romper miedos y limitaciones<br />
        ✨ Reconectar con tu esencia<br />
        ✨ Construir metas claras y alcanzables<br />
        
        Este no es solo un libro, es un regalo de amor y crecimiento personal. 💖<br />
        
        <strong>Da el primer paso hoy. Tu proyecto de vida te está esperando.</strong>
      </div>

      <h2 
        className="font-bold mb-4 font-engagement"
        style={{ 
          color: '#CEA049',
          fontSize: '30px'
        }}
      >
       ¿Para quién es este ebook?
      </h2>
      
      <div className="text-base leading-loose mb-8" style={{ color: '#545454' }}>
        Para emprendedores.<br />
        Para quienes quieren reinventarse.<br />
        Para quienes desean trazar un camino con propósito.<br />
        Para quienes quieren sanar, crecer y reconectar con su esencia.
      </div>
      
      <h2 
        className="font-bold mb-4 font-engagement"
        style={{ 
          color: '#CEA049',
          fontSize: '30px'
        }}
      >
      Lo que lograrás:
      </h2>
      
      <div className="text-base leading-loose" style={{ color: '#545454' }}>
        🌱 Descubrir quién eres, qué te limita y hacia dónde quieres ir.<br />
        💡 Definir tu gran sueño y comprometerte con él.<br />
        💪 Recuperar tu poder personal, tu fe, tu motivación.<br />
        💖 Conectarte con el amor propio y tu propósito real.
      </div>
    </div>
  );
}

export default memo(EbookContent);