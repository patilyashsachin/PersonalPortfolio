import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useInView from '../hooks/useInView';

const About = () => {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref}>
      <Container>
        <div className={`card-neo p-5 card-hover anim-hidden ${visible ? 'anim-visible' : ''}`}>
          <Row>
            <Col lg={8}>
              <div className={`anim-hidden delay-1 ${visible ? 'anim-visible' : ''}`}>
                <h2 className="display-5 fw-bold mb-4">About Me</h2>
              </div>
              <p className={`fs-5 mb-4 anim-hidden delay-2 ${visible ? 'anim-visible' : ''}`}>
                I'm a <strong>Information Technology graduate</strong> with a deep passion for
                building full-stack web applications. Though I'm at the beginning of my
                professional journey, I've spent the past four years honing my skills through
                academic projects, personal builds, and a hands-on internship.
              </p>
              <p className={`fs-5 anim-hidden delay-3 ${visible ? 'anim-visible' : ''}`}>
                I approach every problem with curiosity and a growth mindset. My goal is to
                join a team where I can contribute real value from day one, while continuously
                levelling up. I believe clean code, fast learning, and good communication are
                the foundations of a great engineer.
              </p>
            </Col>

            <Col lg={4} className="mt-4 mt-lg-0 d-flex flex-column justify-content-center gap-4">
              {[
                { value: '2025', label: 'IT Graduate' },
                { value: '1', label: 'Internship' },
              ].map(({ value, label }, i) => (
                <div
                  key={i}
                  className={`neo-inset p-4 text-center anim-hidden delay-${i + 2} ${visible ? 'anim-visible' : ''}`}
                  style={{ borderRadius: '16px' }}
                >
                  <div className="display-5 fw-bold" style={{ color: 'var(--primary-color)' }}>
                    {value}
                  </div>
                  <div className="fw-medium" style={{ color: 'var(--on-surface-variant)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
