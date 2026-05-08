import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Database, Layout, Server } from 'lucide-react';
import useInView from '../hooks/useInView';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Bootstrap', 'Redux', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git & GitHub', 'Postman', 'VS Code'],
  },
];

const SkillCard = ({ title, skills, icon: Icon, delay, visible }) => (
  <div
    className={`card-neo card-hover h-100 anim-hidden delay-${delay} ${visible ? 'anim-visible' : ''}`}
  >
    <div
      className="neo-inset p-3 d-inline-block mb-4"
      style={{ borderRadius: '14px' }}
    >
      <Icon size={24} color="var(--primary-color)" />
    </div>
    <h3 className="h5 fw-bold mb-3">{title}</h3>
    <div className="d-flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="neo-raised px-3 py-1 fw-medium"
          style={{
            borderRadius: '10px',
            fontSize: '0.82rem',
            color: 'var(--on-surface)',
            transition: 'all 0.2s ease',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--primary-color)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--on-surface)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className="py-5" ref={ref}>
      <Container>
        <div className={`text-center mb-5 anim-hidden ${visible ? 'anim-visible' : ''}`}>
          <h2 className="display-5 fw-bold mb-3">Technical Arsenal</h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: '600px', color: 'var(--on-surface-variant)' }}>
            Technologies I've learned through coursework, projects, and hands-on practice.
          </p>
        </div>
        <Row className="g-4">
          {skillGroups.map((group, i) => (
            <Col md={4} key={i}>
              <SkillCard {...group} delay={i + 2} visible={visible} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
