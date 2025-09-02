'use client';

export default function EbookCover() {
  return (
    <div className="book-section text-center">
      {/* Portada del libro - exactamente como en el HTML */}
      <img 
        src="/images/Ebook cover.png"
        alt="18 pasos hacia tu proyecto de vida - Ebook cover"
        style={{
          backgroundColor: '#CEA049',
          padding: '8px 16px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '20px',
          maxWidth: '280px',
          height: 'auto'
        }}
      />
      
      
      {/* Sección BONUS */}
      <div 
        className="bonus-section"
        style={{
          backgroundColor: '#F6DDDD',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h3 
          className="bonus-title font-engagement"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#545454',
            marginBottom: '15px'
          }}
        >
          BONUS
        </h3>
        <div 
          className="bonus-list"
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#545454'
          }}
        >
          📚 <strong>Ebook</strong> - $97 dólares<br /><br />
          
          🎯 <strong>Llamada aclaratoria conmigo</strong>- $300<br /><br />
          
          🎧 <strong>Audio</strong> (Empieza tu día con estas poderosas afirmaciones) - $20<br /><br />
          
          💬 <strong>Comunidad privada en WhatsApp</strong><br /><br />

          💰 <strong>Total:</strong> $417<br /><br />
          
          💎 <strong>Precio especial:</strong> $27<br /><br />
        
        </div>
      </div>
      
      {/* Contenedor de precios */}
      <div className="price-container" style={{ marginBottom: '10px' }}>
        <span 
          className="original-price"
          style={{
            fontSize: '18px',
            color: '#999',
            textDecoration: 'line-through',
            marginRight: '10px'
          }}
        >
          Precio original: $417
        </span>
        <div 
          className="offer-price"
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#CEA049'
          }}
        >
          Precio especial: $27
        </div>
      </div>
      
      {/* Sección de pago Venezuela */}
      <div 
        className="payment-section"
        style={{
          backgroundColor: '#E2FAF0',
          padding: '25px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h3 
          className="payment-title font-engagement"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#545454',
            marginBottom: '15px'
          }}
        >
          💳 Compras en Venezuela
        </h3>
        <div 
          className="payment-info"
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#545454'
          }}
        >
          💰 <strong>Zelle:</strong> belkisurbina@hotmail.com<br /><br />
          📱 <strong>WhatsApp:</strong> +57 320 5723257<br />
          (Envía el comprobante de pago)
        </div>
      </div>

      {/* Sección de pago Colombia */}
      <div 
        className="payment-section"
        style={{
          backgroundColor: '#F6DDDD',
          padding: '25px',
          borderRadius: '8px',
          marginBottom: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <h3 
          className="payment-title font-engagement"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#545454',
            marginBottom: '15px'
          }}
        >
          🇨🇴 Compras en Colombia
        </h3>
        <div 
          className="payment-info"
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#545454'
          }}
        >
          🏦 <strong>Bancolombia:</strong><br />
          Cuenta de ahorros: 76730263925<br />
          Belkis Urbina Campo<br /><br />
          
          📱 <strong>Nequi:</strong> 323 3213479<br /><br />
          
          📞 <strong>WhatsApp:</strong> +57 320 5723257<br />
          (Envía el comprobante de pago)
        </div>
      </div>
      
      {/* Botones CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
        <a 
          href="https://pay.hotmart.com/S101275488H?bid=1756755632034"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          style={{
            backgroundColor: '#CEA049',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B8904A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#CEA049';
          }}
        >
          OBTENER AHORA
        </a>
        
        <a 
          href="https://wa.me/573205723257?text=Hola,%20he%20realizado%20el%20pago%20de%20$27%20por%20el%20paquete%20'18%20pasos%20hacia%20tu%20proyecto%20de%20vida'%20y%20quiero%20enviar%20el%20comprobante"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#128C7E';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#25D366';
          }}
        >
          📱 Mandar Comprobante
        </a>
      </div>
    </div>
  );
}