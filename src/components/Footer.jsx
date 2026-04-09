function Footer() {
  return (
    <footer className="footer fade-section visible">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Soul Sync</h3>
          <p>Where your thoughts find calm.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#privacy">Private mode</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#privacy-policy">Privacy policy</a>
            <a href="#terms">Terms of service</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Soul Sync. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer