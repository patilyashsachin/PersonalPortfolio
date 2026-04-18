import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ExternalLink, GitBranch } from 'lucide-react';
import useInView from '../hooks/useInView';

const ProjectCard = ({ title, description, image, tags, delay, visible }) => (
  <div
    className={`card-neo card-hover overflow-hidden p-0 h-100 anim-hidden delay-${delay} ${visible ? 'anim-visible' : ''}`}
    style={{ borderRadius: '18px' }}
  >
    {/* Image */}
    <div className="neo-inset overflow-hidden mx-3 mt-3" style={{ height: '150px', borderRadius: '14px' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
    </div>

    {/* Content */}
    <div className="p-3">
      {/* Tags */}
      <div className="d-flex flex-wrap gap-1 mb-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--primary-color)',
            }}
          >
            {tag}{i < tags.length - 1 ? ' ·' : ''}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="fw-bold mb-1" style={{ fontSize: '0.95rem' }}>{title}</h3>

      {/* Description */}
      <p className="mb-3" style={{ fontSize: '0.80rem', color: 'var(--on-surface-variant)', lineHeight: 1.5 }}>
        {description}
      </p>

      {/* Buttons */}
      <div className="d-flex gap-2">
        <a
          href="#"
          className="neo-raised text-decoration-none d-flex align-items-center justify-content-center gap-1 flex-grow-1 py-2"
          style={{ borderRadius: '10px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--on-surface)' }}
        >
          <GitBranch size={13} /> Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [ref, visible] = useInView();

  const projects = [
    {
      title: 'Online Food Delivery System',
      description: 'Food delivery platform for ordering, tracking, and managing deliveries with real-time updates.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop',
      tags: ['Java', 'SpringBoot', 'React', 'MySQL', 'Microservices'],
    },
    {
      title: 'AI-powered Knowledge Sharing Platform.',
      description: 'AI-powered platform for sharing, searching, and managing knowledge with intelligent recommendations.',
      image: 'https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/64502c47934b682e375a0876_AnyConv.com__Artificial%20Intelligence%20Blog%20Writing%20Using%20AI%20in%2060%20Minutes.webp',
      tags: ['Java', 'SpringBoot', 'React', 'MySQL', 'Groq'],
    },
    {
      title: 'KumbhAssist: Crowd Management System',
      description: 'Smart assistance platform for managing crowd, navigation, and services during Kumbh Mela with real-time updates.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYfnPmnXh48d8Fh9xfXMHYONfHAO7O6LkzA&s',
      tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Socket.io'],
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing projects, skills, and experience with a modern, responsive design and interactive UI.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
      tags: ['React', 'Bootstrap', 'React-Router', 'gh-pages'],
    }
  ];

  return (
    <section id="projects" className="py-5" ref={ref}>
      <Container>
        <div className={`text-center mb-5 anim-hidden ${visible ? 'anim-visible' : ''}`}>
          <h2 className="display-5 fw-bold mb-3">Selected Works</h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: '600px', color: 'var(--on-surface-variant)' }}>
            Projects I've built while learning and exploring full-stack development.
          </p>
        </div>

        <Row className="g-3">
          {projects.map((project, i) => (
            <Col sm={6} md={4} key={i}>
              <ProjectCard {...project} delay={(i % 3) + 2} visible={visible} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
