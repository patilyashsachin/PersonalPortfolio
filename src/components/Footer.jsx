import React from 'react';
import { Container } from 'react-bootstrap';
import { GitBranch, Link, X, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5">
      <Container>
        <div className="card-neo p-4 text-center">
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="neo-raised p-3 rounded-circle text-decoration-none" style={{ color: 'var(--on-surface)' }}>
              <GitBranch size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="neo-raised p-3 rounded-circle text-decoration-none" style={{ color: 'var(--on-surface)' }}>
              <Link size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="neo-raised p-3 rounded-circle text-decoration-none" style={{ color: 'var(--on-surface)' }}>
              <X size={20} />
            </a>
            <a href="mailto:hello@yashpatil.dev" className="neo-raised p-3 rounded-circle text-decoration-none" style={{ color: 'var(--on-surface)' }}>
              <Mail size={20} />
            </a>
          </div>
          <p className="mb-0 fw-medium" style={{ color: 'var(--on-surface-variant)' }}>
            © {new Date().getFullYear()} Yash Patil. All rights reserved.
          </p>
          <div className="mt-3 small" style={{ color: 'var(--on-surface-variant)', opacity: 0.7 }}>
            Built with React, Bootstrap & Stitch Neomorphic Design
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
