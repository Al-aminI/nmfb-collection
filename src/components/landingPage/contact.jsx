import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = props.data ? props.data.email : "info@nasmfbank.com";
    const subject = `Website Contact – Message from ${name || "a visitor"}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(
      message
    )}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    setSent(true);
    clearState();
    setTimeout(() => setSent(false), 6000);
  };

  const whatsappNumber = props.data
    ? props.data.phone.replace(/[^0-9]/g, "")
    : "2349169548959";

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <div className="eyebrow">We'd Love to Hear From You</div>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success">
                  {sent && (
                    <div className="contact-success">
                      <i className="fa fa-check-circle"></i> Your email client
                      has been opened. If it didn't, email us at{" "}
                      <a href={props.data ? `mailto:${props.data.email}` : "mailto:info@nasmfbank.com"}>
                        {props.data ? props.data.email : "info@nasmfbank.com"}
                      </a>
                    </div>
                  )}
                </div>
                <div className="contact-buttons">
                  <button type="submit" className="btn btn-custom btn-lg btn-hero-primary">
                    <i className="fa fa-envelope"></i> Send Message
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-custom btn-lg btn-whatsapp"
                  >
                    <i className="fa fa-whatsapp"></i> Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div>
                <span>Address</span>
                <p className="value">
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div>
                <span>Phone</span>
                <p className="value">
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div>
                <span>Email</span>
                <p className="value">
                  <a href={props.data ? `mailto:${props.data.email}` : "mailto:info@nasmfbank.com"}>
                    {props.data ? props.data.email : "info@nasmfbank.com"}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.facebook : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.instagram : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.tiktok : "/"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                    >
                      <svg
                        className="social-svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 NasMFB. Design by{" "}
            <a href="http://www.ai.com" rel="nofollow">
              AI Info Tech.
            </a>
          </p>
          <p>
            <a href="/privacyPolicy" style={{ color: '#fff', textDecoration: 'underline' }}>
              Privacy and Cookies Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};