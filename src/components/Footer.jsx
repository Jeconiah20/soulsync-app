function Footer({ setCurrentPage }) {
  const scrollToSection = (sectionId) => {
    // If not on home page, go to home first
    if (setCurrentPage) {
      setCurrentPage('home')
    }
    
    // Then scroll to section after a brief delay
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

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
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features') }}>
              Features
            </a>
            <a href="#how" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works') }}>
              How it works
            </a>
            {setCurrentPage && (
              <a href="#myentries" onClick={(e) => { e.preventDefault(); setCurrentPage('myentries') }}>
                My Entries
              </a>
            )}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about" onClick={(e) => e.preventDefault()}>About</a>
            <a href="https://github.com/Jeconiah20/soulsync-app" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="mailto:contact@soulsync.com" onClick={(e) => e.preventDefault()}>
              Contact
            </a>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <a href="https://github.com/Jeconiah20/soulsync-app#readme" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
            <a href="#support" onClick={(e) => e.preventDefault()}>Support</a>
            <a href="#faq" onClick={(e) => e.preventDefault()}>FAQ</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Soul Sync. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer