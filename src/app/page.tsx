import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#FDEEE7', color: '#545454', lineHeight: '1.6', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
            padding: '60px 0',
            minHeight: '80vh'
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* Content Left */}
          <div className="content-left">
            <h1
              style={{
                fontFamily: 'var(--font-engagement)',
                fontSize: '4rem',
                color: '#CEA049',
                marginBottom: '30px',
                textAlign: 'center'
              }}
            >
              Conoce a Belkis Urbina
            </h1>

            <div style={{ fontSize: '18px', marginBottom: '40px', textAlign: 'justify' }}>
              <p>Hola, soy Belkis Urbina. Mi trayectoria como mentora en mentalidad y Life Coach, con más de 20 años de procesos y experiencia, me ha permitido disfrutar profundamente de ver a las personas brillar. Soy una oyente en constante evolución, lo que me ha dado la oportunidad de conectar con la vida de muchas personas al escuchar sus historias y acompañarlas durante su proceso de crecimiento y expansión.</p>
            </div>

            <div style={{ marginBottom: '35px' }}>
              <p style={{ marginBottom: '15px', textAlign: 'justify' }}>Acompaño a quienes están dispuestos a sacar todo el brillo que vive en su interior para mejorar su realidad a través de un proceso transformador.</p>

              <p style={{ marginBottom: '15px', textAlign: 'justify' }}>Ha sido increíble, y lo mejor de este camino ha sido conocerme a mí misma. Estoy profundamente agradecida por los retos vividos, porque gracias a ellos tuve la oportunidad de descubrir mi SER, reconocer mis debilidades y, sobre todo, descubrir todo mi potencial para ir por mis sueños y metas. Lo más hermoso es que hoy me siento genuinamente feliz con la vida que he creado. Creo que todo es posible vibrando en positivo y con el amor infinito de Dios.</p>
            </div>

            <div style={{ marginBottom: '35px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-engagement)',
                  fontSize: '2.2rem',
                  color: '#CEA049',
                  marginBottom: '15px'
                }}
              >
                Mi Misión Contigo
              </h2>
              <p style={{ marginBottom: '15px', textAlign: 'justify' }}>Mi pasión es servir y disfrutar cada día a través de cada ser maravilloso, único y especial que llega a mi vida como un regalo valioso de Dios.</p>

              <h3 style={{ fontSize: '1.3rem', color: '#CEA049', marginBottom: '10px', fontWeight: 'bold' }}>Mi objetivo es ayudarte a:</h3>
              <ul style={{ listStyle: 'none', margin: '20px 0' }}>
                <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#CEA049', fontWeight: 'bold' }}>✓</span>
                  Descubrir las grandezas de tu esencia hermosa
                </li>
                <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#CEA049', fontWeight: 'bold' }}>✓</span>
                  Reprogramar tu mente
                </li>
                <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#CEA049', fontWeight: 'bold' }}>✓</span>
                  Hacer conciencia de que el proceso empieza por ti
                </li>
                <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#CEA049', fontWeight: 'bold' }}>✓</span>
                  Aumentar tu merecimiento
                </li>
                <li style={{ position: 'relative', paddingLeft: '25px', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#CEA049', fontWeight: 'bold' }}>✓</span>
                  Trascender límites mentales
                </li>
              </ul>

              <p style={{ marginBottom: '15px', textAlign: 'justify' }}>Todo esto para co-crear una vida con bases sólidas desde la intensidad, plenitud, amor y abundancia, brillando en todos los campos de tu vida. Contemplo al ser humano en su totalidad: mental, emocional, espiritual, física y financiera.</p>

              <p style={{ marginBottom: '15px', textAlign: 'justify' }}>Mi principio básico es el autoconocimiento, para que puedas observar con claridad y estructurar objetivos y planes de acción que te conviertan en el creador de tu propia realidad.</p>
            </div>

            <div
              style={{
                backgroundColor: '#E2FAF0',
                padding: '25px',
                borderRadius: '15px',
                margin: '30px 0',
                borderLeft: '5px solid #CEA049',
                fontStyle: 'italic',
                textAlign: 'center',
                fontSize: '18px',
                color: '#545454'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', color: '#CEA049', marginBottom: '10px', fontWeight: 'bold' }}>Mis Palabras para Ti Hoy</h3>
              <p>Dale valor a lo real. Descubre tus sueños y reconoce cuáles son las barreras mentales que te impiden lograrlos. Todo lo que necesitas está dentro de ti. Ningún sueño es demasiado grande.</p>
            </div>
          </div>

          {/* Content Right */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20px' }}>
            <div style={{ position: 'relative', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
              <Image
                src="/belkis-portrait.jpg"
                alt="Belkis Urbina - Life Coach y Mentora"
                width={400}
                height={600}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  marginBottom: '20px'
                }}
                priority
              />

              {/* Instagram Link */}
              <a
                href="https://instagram.com/soybelkisurbina"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#CEA049',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'opacity 0.3s ease'
                }}
                className="hover:opacity-80"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @soybelkisurbina
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
