// components/sections/Contact.tsx

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get Connected</h2>

        <p className="text-muted">
          Text here?
        </p>

        <form className="contact-form">

          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} placeholder="Write your message..." />
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>
          Or email: contact@fletchernac.com
        </p>
      </div>
    </section>
  );
}