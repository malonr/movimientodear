import Countdown from '@/components/Countdown';
import Header from '@/components/Header';
import CTAButton from '@/components/CTAButton';

export default function TallerPage() {
  // Fecha objetivo para el taller: 13 de octubre 2025, 7:00 PM Colombia
  const targetDate = '2025-10-13 19:00:00';

  return (
    <>
      <Header />
      <div style={{ fontFamily: "'Bree Serif', serif", backgroundColor: '#FDEEE7', color: '#545454', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '60px 0',
        background: 'linear-gradient(135deg, #FDEEE7 0%, #F6DDDD 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Countdown
            targetDate={targetDate}
            className="countdown"
          />
          <h1 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '4.5rem',
            color: '#CEA049',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Ventas sin Esfuerzo
          </h1>
          <div style={{
            fontSize: '1.8rem',
            color: '#545454',
            marginBottom: '30px',
            fontWeight: 'bold'
          }}>
            Taller Online Intensivo
          </div>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto 40px',
            color: '#666'
          }}>
            Descubre el método espiritual y consciente para vender de manera auténtica,
            sin presión ni manipulación. Conecta con tu propósito y atrae clientes ideales
            de forma natural y effortless.
          </p>
          <CTAButton href="https://pay.hotmart.com/N102110390U?off=d5oq04jv">
            🌟 Únete POR SOLO $17 USD
          </CTAButton>
        </div>
      </section>

      {/* Problem Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#E2FAF0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '3rem',
            color: '#CEA049',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            ¿Te identificas con esto?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>📚 Productos de Calidad sin Ventas</h3>
              <p>Tienen productos, cursos, talleres, conferencias o eventos presenciales de excelente calidad que no se venden lo suficiente porque no saben la ruta exacta para hacerlo.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>❄️ Estrategias Frías</h3>
              <p>Están cansados de seguir estrategias frías y mecánicas que no resuenan con su misión.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>💰 Dependencia de Ingresos</h3>
              <p>Su Negocio es su fuente principal de ingresos por eso sufren al ver pasar algunos días sin ventas.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>😣 Vender es Doloroso</h3>
              <p>Sienten que vender es un proceso doloroso en su vida y que les cuesta mucho tiempo y energía.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>🎯 Conocimiento sin Ventas</h3>
              <p>Sienten frustración de tener muchos conocimientos y ser muy buenos en lo que hacen, pero no pueden traducir esto en ventas fluidas y millonarias.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>⚡ Esfuerzo Excesivo</h3>
              <p>Piensan que para tener ventas millonarias tienen que invertir muchísimo esfuerzo, tiempo y dejar su alma en el camino.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>🤝 Conexión con Clientes</h3>
              <p>Aunque quieren tener mejores relaciones con sus clientes y ser percibidos más allá de las palabras ¡No saben cómo lograrlo!</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>🔗 Dificultad para Conectar</h3>
              <p>Les cuesta mucho inspirar y conectar con nuevas personas para cerrar ventas todos los días con fluidez.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#CEA049', fontSize: '1.5rem', marginBottom: '20px' }}>💫 Vivir de la Pasión</h3>
              <p>Tienen un fuerte deseo de vivir 100% de su pasión, ser ejemplo y tener tiempo de calidad con sus familias pero les cuesta lograrlo porque no logran vender y generar el dinero suficiente para sostener su vocación.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '1.3rem', color: '#CEA049', fontWeight: 'bold' }}>¡Rompe este ciclo de dolor y frustración!</p>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#FDEEE7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '3rem',
            color: '#CEA049',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            Lo que aprenderás en 2 días
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ color: '#CEA049', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>CLASE #1</div>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>Cómo funciona el universo de las ventas sin esfuerzo</h3>
              <div style={{ color: '#888', fontStyle: 'italic', marginBottom: '15px' }}>📍Lunes 13 de octubre 7:00 p.m. hora Colombia</div>
              <p>Identifica los bloqueos invisibles que separan tu talento de tu abundancia. Tendrás la visión clara de la identidad próspera que necesitas habitar para atraer clientes desde tu autenticidad y no desde el esfuerzo. Las claves para crear un Negocio Digital que vende todos los días sin esfuerzo. Descubrirás por qué tu estructura actual te agota y cómo crear un nuevo sistema que te permitirá vender más, desgastándote menos.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <div style={{ color: '#CEA049', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '15px' }}>CLASE #2</div>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>Los 10 pilares para expandir tu negocio y servir al máximo potencial</h3>
              <div style={{ color: '#888', fontStyle: 'italic', marginBottom: '15px' }}>📍Martes 14 de octubre 7:00 p.m. hora Colombia</div>
              <p>Tendrás acceso a la estructura exacta de los negocios de alto impacto y diseñarás tu mapa personalizado de crecimiento, del nivel en el que estás hoy al nivel que tu propósito está listo para habitar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #F6DDDD 0%, #E2FAF0 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/belkis foto perfil.png"
                alt="Belkis Urbina"
                style={{
                  maxWidth: '300px',
                  borderRadius: '50%',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              />
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Engagement', cursive",
                fontSize: '3rem',
                color: '#CEA049',
                marginBottom: '30px'
              }}>
                Tu Mentora: Belkis Urbina
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', textAlign: 'justify' }}>
                Con más de 20 años de experiencia como Life Coach y mentora en mentalidad, he acompañado a cientos de emprendedoras a transformar su relación con las ventas.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', textAlign: 'justify' }}>
                Mi enfoque único combina desarrollo personal profundo con estrategias prácticas de negocio, creando un método que honra tanto tu crecimiento espiritual como tus metas financieras.
              </p>
              <p style={{ fontSize: '1.1rem', marginBottom: '20px', textAlign: 'justify' }}>
                He ayudado a mis clientas a generar ingresos de 6 cifras mientras mantienen su integridad y propósito de vida. Ahora es tu turno de experimentar esta transformación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 0', backgroundColor: '#FDEEE7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '3rem',
            color: '#CEA049',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            Lo que dicen mis alumnas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <div style={{
                content: '\"',
                fontSize: '4rem',
                color: '#CEA049',
                position: 'absolute',
                top: '-10px',
                left: '20px',
                fontFamily: "'Engagement', cursive"
              }}>"</div>
              <div style={{ marginBottom: '20px', fontStyle: 'italic', paddingTop: '20px' }}>
                Belkis me ayudó a cambiar completamente mi mentalidad sobre las ventas. Ahora genero ingresos desde la autenticidad y el amor.
              </div>
              <div style={{ fontWeight: 'bold', color: '#CEA049' }}>- María González, Coach de Vida</div>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <div style={{
                content: '\"',
                fontSize: '4rem',
                color: '#CEA049',
                position: 'absolute',
                top: '-10px',
                left: '20px',
                fontFamily: "'Engagement', cursive"
              }}>"</div>
              <div style={{ marginBottom: '20px', fontStyle: 'italic', paddingTop: '20px' }}>
                Gracias al método de Belkis, mis ventas se triplicaron en 3 meses. Lo más increíble es que ahora vendo sin presión ni estrés.
              </div>
              <div style={{ fontWeight: 'bold', color: '#CEA049' }}>- Carmen Rodríguez, Terapeuta</div>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <div style={{
                content: '\"',
                fontSize: '4rem',
                color: '#CEA049',
                position: 'absolute',
                top: '-10px',
                left: '20px',
                fontFamily: "'Engagement', cursive"
              }}>"</div>
              <div style={{ marginBottom: '20px', fontStyle: 'italic', paddingTop: '20px' }}>
                Transformé mi negocio y mi vida. Ahora tengo clientes que me buscan porque resueno con su alma. Es magia pura.
              </div>
              <div style={{ fontWeight: 'bold', color: '#CEA049' }}>- Ana Martín, Consultora</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#FDEEE7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '3rem',
            color: '#CEA049',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            ¿Qué te llevas con tu entrada al Taller EN VIVO?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>📅 2 días 100% EN VIVO</h3>
              <p>Conmigo, Belkis Urbina (Del lunes 13 al martes 14 octubre, 7:00 PM Colombia).</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>📝 Cuaderno de trabajo</h3>
              <p>"Ventas sin Esfuerzo" con ejercicios de transformación profunda.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>💬 Grupo privado WhatsApp</h3>
              <p>Acceso al grupo privado donde estaré enviando contenido exclusivo antes y durante los 2 días.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>⚡ Mi energía y presencia</h3>
              <p>Mi compromiso total con tu transformación durante estos 2 días intensivos.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>🔓 Claridad sobre bloqueos</h3>
              <p>Claridad sobre los bloqueos invisibles que hoy te impiden atraer clientes con fluidez, y la visión de tu nueva identidad próspera.</p>
            </div>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              borderLeft: '5px solid #CEA049',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#545454', fontSize: '1.3rem', marginBottom: '15px' }}>🗺️ Tu mapa personalizado</h3>
              <p>Con los 10 pilares que te permitirán expandir tu negocio hacia ventas millonarias con propósito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="precio"
        style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #E2FAF0 0%, #F6DDDD 100%)',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontFamily: "'Engagement', cursive",
            fontSize: '3rem',
            color: '#CEA049',
            marginBottom: '30px'
          }}>
            Me lo llevo por solo
          </h2>
          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{
              fontSize: '4rem',
              color: '#CEA049',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              $17 USD
            </div>
            <div style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#666' }}>
              ✨ 2 días de taller intensivo EN VIVO<br />
              📚 Cuaderno de trabajo "Ventas sin Esfuerzo"<br />
              💬 Acceso al grupo privado de WhatsApp<br />
              🗺️ Tu mapa personalizado de crecimiento<br />
              🔓 Claridad sobre tus bloqueos invisibles
            </div>
            <CTAButton href="https://pay.hotmart.com/N102110390U?off=d5oq04jv">
              💫 ¡Quiero Transformar mis Ventas!
            </CTAButton>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}