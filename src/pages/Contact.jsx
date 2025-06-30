import "../styles/contact.css";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=mjlnavarro@tip.edu.ph&su=${subject}&body=${body}`;

    window.open(gmailURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="card-section contact-block scroll-anchor"
      data-aos="fade-up"
    >
      <h3>Let's Connect</h3>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="4" placeholder="Your Message..." required />
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-details">
        <p>
          <strong>School Email:</strong> mjlnavarro@tip.edu.ph
          <button onClick={() => copyText("mjlnavarro@tip.edu.ph")}>Copy</button>
        </p>
        <p>
          <strong>Personal Email:</strong> nvrrojn6@gmail.com
          <button onClick={() => copyText("nvrrojn6@gmail.com")}>Copy</button>
        </p>
        <p>
          <strong>Mobile:</strong> +63 993 602 4291
          <button onClick={() => copyText("+63 993 602 4291")}>Copy</button>
        </p>
        <p>
          <strong>Address:</strong> 24 D-S Fairways Tower, 5th Ave, BGC, Taguig
        </p>
        {copied && <p className="copied-message">Copied!</p>}
      </div>
    </section>
  );
}

export default Contact;