import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    institution: 'MVP Karmaveer Adv. Baburao Ganpatrao Thakare College Of Engineering, Nashik',
    location: 'Nashik, India',
    period: '2021 – 2025',
    grade: 'CGPA: 8.02 / 10',
    highlights: [
      'Specialized in Software Engineering and Data Structures',
      'Final year project: Crowd Management System',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (12th)',
    field: 'Science – Physics, Chemistry, Mathematics',
    institution: 'MVP S.V.K.T College of Science, Arts and Commerce, Devlali Camp',
    location: 'Nashik, India',
    period: '2019 – 2021',
    grade: 'Percentage: 72.83%',
    highlights: [
      'School topper in Mathematics and Computer Science',
      'Participated in state-level Science Olympiad',
    ],
  },
];

const EducationCard = ({ item, index }) => (
  <div
    className="card-neo p-4 p-md-5 mb-4"
    style={{
      position: 'relative',
      overflow: 'hidden',
      borderLeft: '4px solid var(--primary-color)',
    }}
  >
    {/* Subtle accent glow */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}
    />

    <Row className="align-items-start g-4">
      {/* Icon bubble */}
      <Col xs="auto">
        <div
          className="neo-inset d-flex align-items-center justify-content-center"
          style={{ width: '56px', height: '56px', borderRadius: '16px' }}
        >
          <GraduationCap size={26} color="var(--primary-color)" />
        </div>
      </Col>

      <Col>
        {/* Header row */}
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-1">
          <div>
            <h3 className="h4 fw-bold mb-0">{item.degree}</h3>
            <p className="fw-semibold mb-0" style={{ color: 'var(--primary-color)' }}>
              {item.field}
            </p>
          </div>
          <span
            className="neo-inset px-3 py-2 fw-semibold"
            style={{
              borderRadius: '50px',
              fontSize: '0.8rem',
              color: 'var(--primary-color)',
              whiteSpace: 'nowrap',
            }}
          >
            <Award size={13} style={{ marginRight: '6px', marginTop: '-2px' }} />
            {item.grade}
          </span>
        </div>

        {/* Meta */}
        <div className="d-flex flex-wrap gap-3 mt-2 mb-4">
          <span
            className="d-flex align-items-center gap-1 fw-medium"
            style={{ color: 'var(--on-surface)', fontSize: '0.9rem' }}
          >
            {item.institution}
          </span>
          <span
            className="d-flex align-items-center gap-1"
            style={{ color: 'var(--on-surface-variant)', fontSize: '0.85rem' }}
          >
            <MapPin size={13} /> {item.location}
          </span>
          <span
            className="d-flex align-items-center gap-1"
            style={{ color: 'var(--on-surface-variant)', fontSize: '0.85rem' }}
          >
            <Calendar size={13} /> {item.period}
          </span>
        </div>

        {/* Highlights */}
        <div className="d-flex flex-column gap-2">
          {item.highlights.map((h, i) => (
            <div key={i} className="d-flex align-items-start gap-2">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  marginTop: '8px',
                  flexShrink: 0,
                }}
              />
              <p className="mb-0" style={{ fontSize: '0.95rem', color: 'var(--on-surface-variant)' }}>
                {h}
              </p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </div>
);

const Education = () => {
  return (
    <section id="education">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <div
            className="neo-raised d-inline-flex align-items-center gap-2 px-3 py-1 mb-3"
            style={{ borderRadius: '50px' }}
          >

          </div>
          <h2 className="display-5 fw-bold mb-3">Education</h2>
          <p
            className="fs-5 mx-auto"
            style={{ maxWidth: '600px', color: 'var(--on-surface-variant)' }}
          >
            The foundations that shaped my technical thinking and problem-solving approach.
          </p>
        </div>

        {/* Cards */}
        {educationData.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </Container>
    </section>
  );
};

export default Education;
