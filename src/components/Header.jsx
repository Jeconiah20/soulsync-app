import logo from '../Soul_Sync_Logo-removebg-preview 1.png'
import { supabase } from '../supabaseClient'

function Header({ setCurrentPage, setIsLoggedIn }) {
  
  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsLoggedIn(false)
    setCurrentPage('home')
  }

  return (
    <header className="main-header fade-section visible">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a 
            className="navbar-brand d-flex align-items-center" 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage('home')
            }}
          >
            <img src={logo} alt="Soul Sync Logo" className="brand-logo" />
            <span className="brand-name">Soul Sync</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav align-items-center gap-4">
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage('today')
                  }}
                >Today</a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage('insights')
                  }}
                >Today's Insights</a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage('gratitude')
                  }}
                >Gratitude</a>
              </li>
              <li className="nav-item">
  <a 
    className="nav-link cta-link" 
    href="#"
    onClick={(e) => {
      e.preventDefault()
      setCurrentPage('myentries')
    }}
  >My Entries</a>
</li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleLogout()
                  }}
                >Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header