import Link from 'next/link';
import { memo } from 'react';

function Header() {
  return (
    <header className="header bg-white" style={{ padding: '15px 20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <nav className="nav flex items-center mx-auto" style={{ maxWidth: '1200px', justifyContent: 'space-between' }}>
        <Link href="/" className="font-bold text-lg hover:opacity-80 transition-opacity no-underline" style={{ color: '#545454' }}>
          MOVIMIENTODEAR
        </Link>
        
        <div className="flex items-center" style={{ gap: '40px' }}>
          <ul className="nav-links hidden md:flex list-none" style={{ gap: '30px' }}>
            <li>
              <Link
                href="/ebook"
                className="font-medium no-underline hover:opacity-80 transition-opacity"
                style={{ color: '#545454' }}
              >
                Ebook
              </Link>
            </li>
            <li>
              <Link
                href="/taller"
                className="font-medium no-underline hover:opacity-80 transition-opacity"
                style={{ color: '#545454' }}
              >
                Taller
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-medium no-underline hover:opacity-80 transition-opacity"
                style={{ color: '#545454' }}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="font-medium no-underline hover:opacity-80 transition-opacity"
                style={{ color: '#545454' }}
              >
                Blog
              </Link>
            </li>
          </ul>
          
          <Link 
            href="https://wa.me/573205723257?text=Hola,%20quiero%20información%20sobre%20el%20ebook%20'18%20pasos%20hacia%20tu%20proyecto%20de%20vida'" 
            className="contact-btn text-white font-medium no-underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: '#CEA049',
              padding: '8px 20px',
              borderRadius: '20px'
            }}
          >
            Contactar
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default memo(Header);