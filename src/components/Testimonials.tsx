export default function Testimonials() {
  return (
    <section 
      className="testimonials-section text-center"
      style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}
    >
      <h2 
        className="testimonials-title font-engagement"
        style={{ 
          fontSize: '36px',
          color: '#545454',
          marginBottom: '40px'
        }}
      >
        Lo que dicen nuestros lectores
      </h2>
      
      <div 
        className="testimonial text-left"
        style={{
          backgroundColor: '#F6DDDD',
          padding: '30px',
          borderRadius: '15px',
          margin: '20px auto',
          maxWidth: '800px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}
      >
        <div 
          className="testimonial-text"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#545454',
            marginBottom: '15px'
          }}
        >
          ✨ <strong>Un regalo de vida que no puedes dejar pasar</strong> ✨<br /><br />
          
          Hoy quiero reconocer con el corazón a una mujer valiosa: Belkis Urbina.
          Ella ha puesto en este ebook no solo herramientas y pasos, sino también su amor, su fe y toda la experiencia de más de 20 años acompañando procesos de transformación.<br /><br />
          
          📖 &ldquo;18 pasos hacia tu proyecto de vida&rdquo; no es un simple libro: es una guía práctica, profunda y llena de luz para todas las personas que desean descubrirse, sanar sus miedos, reconectar con sus sueños y construir una vida con propósito.<br /><br />
          
          Este trabajo refleja la entrega de Belkis, su pasión por ver brillar a cada ser humano y su convicción de que sí es posible crear la vida que anhelamos cuando nos decidimos a hacerlo.<br /><br />
          
          💫 Da el primer paso hacia tu proyecto de vida, te motivo a recibir este regalo y permitirte esa transformación que tu ser está esperando.<br /><br />
          
          Gracias Belkis, por inspirarnos, por mostrarnos que ningún sueño es demasiado grande y por recordarnos que todo lo que necesitamos ya está dentro de nosotros. 🌹
        </div>
        <div style={{ textAlign: 'right', marginTop: '15px', fontStyle: 'italic', color: '#545454' }}>
          - Euridice Nuñez
        </div>
      </div>
    </section>
  );
}