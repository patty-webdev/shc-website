import "./index.css";

function App() {
  return (
    <div className="maintenance-page">
      <main className="hero">
        {/* School Logo */}
        <header className="brand">
          <img
            src="/images/shc-logo.png"
            alt="Sacred Heart College Logo"
          />
          <span>Sacred Heart College of Lucena City, Inc.</span>
        </header>

        {/* Maintenance Announcement */}
        <section className="hero-content">
          <p className="status">
            ● WEBSITE SERVICE ADVISORY
          </p>

          <h1>
            Our Website Is
            <br />
            Temporarily Unavailable.
          </h1>

          <p className="description">
            Our official school website is currently undergoing
            essential maintenance and security enhancements.
            We appreciate your patience and understanding
            as we work to restore access.
          </p>

          <p className="description">
            For the latest announcements and updates,
            please visit our official Facebook page.
          </p>

          <div className="actions">
            <a
              href="https://www.facebook.com/sacred.heart.college.official"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Updates on Facebook ↗
            </a>

            <div className="student-portal-action">
              <a
                href="http://222.127.108.202/studentportal/"
                className="btn btn-outline student-portal-button"
              >
                <span>Student Portal ↓</span>
                <span className="payment-receipt-note">
                  You can also attached you online payment receipt here
                </span>
              </a>
            </div>

            <a
              href="http://222.127.108.202/employeeportal/"
              className="btn btn-outline"
            >
              Employee Portal ↓
            </a>
          </div>
        </section>
      </main>

      
      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-inner">
          <div className="footer-heading">
            <h3>NEED ASSISTANCE?</h3>
            <p>
              For inquiries and assistance, you may reach us
              through our official communication channels.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">EMAIL ADDRESS</span>
              <a href="mailto:shc@shc.edu.ph">
                shc@shc.edu.ph
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">TELEPHONE</span>
              <a href="tel:+63427103888">
                (042) 710 3888
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">FACEBOOK</span>
              <a
                href="https://www.facebook.com/sacred.heart.college.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sacred Heart College Official ↗
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Sacred Heart College of Lucena City, Inc.</p>

            <p>powered by
            <img
              src="/images/icet-logo.png" width="100" align="center"
              alt="Sacred Heart College Logo"
            />
            </p>

            <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;