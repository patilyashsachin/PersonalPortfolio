import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    // IMPORTANT: Replace these with your actual EmailJS credentials
    // You can get them by creating an account at https://www.emailjs.com/
    const serviceID = 'service_fvo54zp';
    const templateID = 'template_bhrjx8n';
    const publicKey = 'fm2AKiPr-uOmvpNqb';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setStatus({ submitting: false, success: true, error: false, message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Clear success message after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, success: false, message: '' })), 5000);
      }, (error) => {
        console.error('EmailJS Error:', error);
        setStatus({ submitting: false, success: false, error: true, message: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="card-neo p-5 overflow-hidden">
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">Let's Talk</h2>
              <p className="fs-5 text-secondary mb-5">
                Have a project in mind or looking to collaborate? I'd love to hear from you.
              </p>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="neo-raised p-3 rounded-circle text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">Email</div>
                    <div className="text-secondary">patilyash1914@gmail.com</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="neo-raised p-3 rounded-circle text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">Phone</div>
                    <div className="text-secondary">+91 94030 30170</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="neo-raised p-3 rounded-circle text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="fw-bold">Location</div>
                    <div className="text-secondary">Nashik, India</div>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div className="neo-inset p-4 p-md-5" style={{ borderRadius: '24px' }}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-4">
                      <Form.Group controlId="formName">
                        <Form.Label className="fw-semibold ms-1">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                          className="neo-raised border-0 py-3 px-4"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-4">
                      <Form.Group controlId="formEmail">
                        <Form.Label className="fw-semibold ms-1">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your Email"
                          className="neo-raised border-0 py-3 px-4"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4" controlId="formSubject">
                    <Form.Label className="fw-semibold ms-1">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can I help?"
                      className="neo-raised border-0 py-3 px-4"
                    />
                  </Form.Group>
                  <Form.Group className="mb-5" controlId="formMessage">
                    <Form.Label className="fw-semibold ms-1">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me more about your project..."
                      className="neo-raised border-0 py-3 px-4"
                    />
                  </Form.Group>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="btn-neo-primary text-white w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
                  >
                    {status.submitting ? (
                      <><Loader2 size={20} className="spinner" /> Sending...</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status.message && (
                    <div className={`mt-4 text-center fw-bold ${status.success ? 'text-success' : 'text-danger'}`}>
                      {status.message}
                    </div>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
