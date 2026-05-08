import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight, GitBranch, Link, X, Sparkles } from 'lucide-react';
import selfImg from '../assets/Self.jpg';
import resumePdf from '../assets/Yash_Patil_Resume.pdf';
import useInView from '../hooks/useInView';

const Hero = () => {
  const [ref, visible] = useInView();

  return (
    <section id="home" className="py-5" ref={ref}>
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={7} className="mb-5 mb-lg-0">
            {/* Animated badge — self-contained keyframes */}
            <style>{`
              @keyframes dotRipple {
                0%   { transform: scale(1);   opacity: 0.8; }
                100% { transform: scale(2.5); opacity: 0; }
              }
              @keyframes textRipple {
                0%   { background-position: 0% center; }
                100% { background-position: -200% center; }
              }
            `}</style>
            <div
              className={`neo-raised d-inline-flex align-items-center gap-2 px-4 py-2 mb-4 anim-hidden ${visible ? 'anim-visible' : ''}`}
              style={{
                borderRadius: '50px',
              }}
            >
              {/* Pulsing green dot */}
              <span
                style={{
                  position: 'relative',
                  width: 10,
                  height: 10,
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Ripple ring */}
                <span
                  style={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'rgba(34,197,94,0.35)',
                    animation: 'dotRipple 1.8s ease-out infinite',
                  }}
                />
                {/* Solid dot */}
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#22c55e',
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </span>

              {/* Shimmer text */}
              <span
                className="fw-bold"
                style={{
                  fontSize: '0.85rem',
                  background: 'linear-gradient(90deg, var(--primary-color) 0%, #a78bfa 25%, #ec4899 50%, #a78bfa 75%, var(--primary-color) 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textRipple 3s linear infinite',
                }}
              >
                Open to Opportunities
              </span>
            </div>
            <h1 className={`display-3 fw-bold mb-4 anim-hidden delay-1 ${visible ? 'anim-visible' : ''}`}>
              I build software that <span style={{ color: 'var(--primary-color)' }}>feels</span> as good as it works.
            </h1>
            <p className={`fs-5 mb-5 anim-hidden delay-2 ${visible ? 'anim-visible' : ''}`} style={{ color: 'var(--on-surface-variant)' }}>
              A Full Stack Developer crafting robust, scalable digital experiences using MERN and Java. Specializing in both frontend interfaces and backend architectures.
            </p>
            <div className={`d-flex flex-wrap gap-4 align-items-center anim-hidden delay-3 ${visible ? 'anim-visible' : ''}`}>
              <a href="#projects" className="btn-neo py-3 px-4 d-flex align-items-center gap-2 text-decoration-none" style={{ color: 'var(--primary-color)' }}>
                View Projects <ArrowRight size={18} />
              </a>
              <a href={resumePdf} target="_blank" rel="noreferrer" className="btn-neo-primary text-white py-3 px-4 rounded-pill text-decoration-none d-flex align-items-center gap-2">
                View Resume
              </a>
            </div>
            <div className={`d-flex gap-3 mt-4 anim-hidden delay-4 ${visible ? 'anim-visible' : ''}`}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="neo-raised p-3 text-decoration-none" style={{ color: 'var(--on-surface)', borderRadius: '12px' }}>
                <GitBranch size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="neo-raised p-3 text-decoration-none" style={{ color: 'var(--on-surface)', borderRadius: '12px' }}>
                <Link size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="neo-raised p-3 text-decoration-none" style={{ color: 'var(--on-surface)', borderRadius: '12px' }}>
                <X size={20} />
              </a>
            </div>
          </Col>
          <Col lg={5} className={`d-flex justify-content-center mt-5 mt-lg-0 anim-hidden anim-right delay-2 ${visible ? 'anim-visible' : ''}`}>
            <div className="neo-raised p-4" style={{ borderRadius: '40px' }}>
              {/* Top chip */}
              <div
                className="neo-raised px-3 py-2 mb-3 d-flex align-items-center gap-2"
                style={{ borderRadius: '14px', fontSize: '0.8rem' }}
              >
                <span style={{ fontSize: '1.1rem' }}>🎓</span>
                <span className="fw-semibold">B.E. IT — 2025 Graduate</span>
              </div>

              {/* Photo */}
              <div className="neo-inset overflow-hidden" style={{ borderRadius: '28px', width: '280px', height: '340px' }}>
                <img
                  src={selfImg}
                  alt="Yash Patil"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              {/* Bottom chip */}
              <div
                className="neo-raised px-3 py-2 mt-3 d-flex align-items-center gap-2"
                style={{ borderRadius: '14px', fontSize: '0.8rem' }}
              >
                <Sparkles size={14} color="var(--primary-color)" />
                <span className="fw-semibold" style={{ color: 'var(--primary-color)' }}>
                  Ready to contribute
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
