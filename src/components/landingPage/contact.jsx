import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [emailDraft, setEmailDraft] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const to = props.data ? props.data.email : "info@nasmfbank.com";
    const subject = `Website Contact – Message from ${name || "a visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    // Try to open the user's email client (works on most mobile + desktop clients)
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // Show a compose panel as a fallback in case mail client does not open
    setEmailDraft({ to, subject, body });
    setCopied(false);
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailDraft.body);
      } else {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = emailDraft.body;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // ignore
    }
  };

  const closeEmailDraft = () => {
    setEmailDraft(null);
    clearState();
  };

  const handleWhatsApp = () => {
    const whatsappNumber = props.data
      ? props.data.phone.replace(/[^0-9]/g, "")
      : "2349169548959";
    window.open(`https://wa.me/${whatsappNumber}`, "_blank", "noopener");
  };

  const contactEmail = props.data ? props.data.email : "info@nasmfbank.com";

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
                  Get in touch via email below, or click WhatsApp to start a
                  quick chat. We respond promptly during business hours.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmitEmail}>
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
                    placeholder="Your Message (sent by email only)"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>

                <div className="contact-buttons">
                  <button
                    type="submit"
                    className="btn btn-custom btn-lg btn-hero-primary"
                    disabled={!name || !email || !message}
                  >
                    <i className="fa fa-envelope"></i> Send Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="btn btn-custom btn-lg btn-whatsapp"
                  >
                    <i className="fa fa-whatsapp"></i> Chat on WhatsApp
                  </button>
                </div>
                <p className="contact-help-text">
                  <i className="fa fa-info-circle"></i>
                  <strong>Send Email</strong> delivers your message above.{" "}
                  <strong>Chat on WhatsApp</strong> just opens a chat — your
                  message stays here for email only.
                </p>
              </form>

              {emailDraft && (
                <div className="email-draft" data-reveal>
                  <div className="email-draft-head">
                    <div>
                      <span className="ed-badge">
                        <i className="fa fa-envelope"></i> Email Draft Ready
                      </span>
                      <h3>If your email app didn't open…</h3>
                      <p className="ed-instructions">
                        Compose a new email to{" "}
                        <a href={`mailto:${emailDraft.to}`}>
                          <strong>{emailDraft.to}</strong>
                        </a>
                        , use the subject below, then paste the message.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="ed-close"
                      onClick={closeEmailDraft}
                      aria-label="Close"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>

                  <div className="ed-field">
                    <label>Subject</label>
                    <div className="ed-value ed-readonly">
                      {emailDraft.subject}
                    </div>
                  </div>
                  <div className="ed-field">
                    <label>Message</label>
                    <pre className="ed-value ed-body">{emailDraft.body}</pre>
                  </div>
                  <div className="ed-actions">
                    <button
                      type="button"
                      className="btn btn-custom btn-hero-primary"
                      onClick={copyEmail}
                    >
                      <i
                        className={copied ? "fa fa-check" : "fa fa-copy"}
                      ></i>
                      {copied ? "Copied!" : "Copy Message"}
                    </button>
                    <a
                      href={`mailto:${emailDraft.to}?subject=${encodeURIComponent(
                        emailDraft.subject
                      )}&body=${encodeURIComponent(emailDraft.body)}`}
                      className="btn btn-custom btn-ghost-accent"
                    >
                      <i className="fa fa-mail-forward"></i> Try Email App Again
                    </a>
                  </div>
                </div>
              )}
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
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
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
            <a
              href="/privacyPolicy"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Privacy and Cookies Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};