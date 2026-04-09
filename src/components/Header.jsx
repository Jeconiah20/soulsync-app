import logo from '../Soul_Sync_Logo-removebg-preview 1.png'

function Header() {
  return (
    <header className="main-header fade-section visible">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Soul Sync Logo" className="brand-logo" />
            <span className="brand-name">Soul Sync</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav align-items-center gap-4">
              <li className="nav-item"><a className="nav-link" href="#">Today</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Write</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Journal</a></li>
              <li className="nav-item"><a className="nav-link cta-link" href="#">Private</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header