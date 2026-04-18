import React from 'react';
import { Container } from 'react-bootstrap';
import { CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Professional Journey</h2>
        </div>
        <div className="card-neo p-4 p-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-4 border-bottom border-light">
            <div>
              <h3 className="h4 fw-bold mb-1">Software Developer Intern</h3>
              <p className="text-primary fw-semibold mb-0">Amdox India Pvt. Ltd.</p>
            </div>
            <div className="mt-2 mt-md-0">
              <span className="neo-inset px-3 py-2 text-secondary fw-medium rounded-pill">2026 - Present</span>
            </div>
          </div>
          <div className="ps-md-4">
            <div className="d-flex gap-3 mb-4 align-items-start">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="mb-0 fs-5">Developing and integrating RESTful APIs using Java and Spring Boot for scalable backend services.</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-start">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="mb-0 fs-5">Implementing secure authentication and authorization using JWT and Spring Security.</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-start">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="mb-0 fs-5">Designing and optimizing MySQL database queries to improve data retrieval efficiency.</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-start">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="mb-0 fs-5">Building responsive and dynamic UI components using React.js and Bootstrap.</p>
            </div>
            <div className="d-flex gap-3 mb-4 align-items-start">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="mb-0 fs-5">Collaborating with team members using Git for version control and code reviews.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
