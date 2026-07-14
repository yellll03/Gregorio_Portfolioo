function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>You can reach me here:</p>

        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href="mailto:leighlargueza@gmail.com">
              leighlargueza@gmail.com
            </a>
          </li>
         
        </ul>

        <div className="button-group">
          <a href="mailto:leighlargueza@gmail.com" className="btn">
            Send Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
