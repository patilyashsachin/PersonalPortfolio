import React, { useEffect, useState } from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Code2 } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'sticky',
        top: '16px',
        zIndex: 1000,
        padding: '0 16px',
      }}
    >
      <Container>
        <nav
          style={{
            background: scrolled
              ? 'rgba(232, 234, 240, 0.55)'
              : 'rgba(232, 234, 240, 0.35)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(99,102,241,0.10), 0 2px 8px rgba(0,0,0,0.08)'
              : '0 4px 16px rgba(0,0,0,0.05)',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Brand */}
          <a
            href="#home"
            className="text-decoration-none d-flex align-items-center gap-2"
            style={{ color: 'var(--on-surface)' }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Code2 size={18} color="var(--primary-color)" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
              Yash Sachin Patil
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {['About', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-decoration-none fw-medium px-3 py-2"
                style={{
                  color: 'var(--on-surface-variant)',
                  borderRadius: '10px',
                  transition: 'all 0.2s ease',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'var(--primary-color)';
                  e.target.style.background = 'rgba(99,102,241,0.08)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'var(--on-surface-variant)';
                  e.target.style.background = 'transparent';
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="text-decoration-none text-white fw-semibold ms-3 px-4 py-2"
              style={{
                background: 'var(--primary-color)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                boxShadow: '0 4px 12px rgba(99,102,241,0.35)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="d-lg-none border-0 bg-transparent p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    height: '2px',
                    background: 'var(--on-surface)',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease',
                    transformOrigin: 'center',
                    transform:
                      menuOpen
                        ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                          : i === 1 ? 'scaleX(0)'
                            : 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            style={{
              marginTop: '8px',
              background: 'rgba(232, 234, 240, 0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-decoration-none fw-medium px-3 py-2"
                style={{
                  color: item === 'Contact' ? 'var(--primary-color)' : 'var(--on-surface)',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  transition: 'background 0.2s',
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navigation;
