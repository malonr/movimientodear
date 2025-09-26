'use client';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, children, className = '' }: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{
        background: 'linear-gradient(135deg, #CEA049, #B8904A)',
        color: 'white',
        padding: '20px 40px',
        border: 'none',
        borderRadius: '50px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '20px 0',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(206, 160, 73, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </a>
  );
}