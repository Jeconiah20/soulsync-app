import diaryImage from '../Diary.svg'

function Hero({ setCurrentPage }) {
  return (
    <section className="hero-section fade-section visible">
      <div className="orbs">
        <span className="orb orb-1"></span>
        <span className="orb orb-2"></span>
        <span className="orb orb-3"></span>
      </div>

      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-text">
            <h1>A calm space<br />to sync with your soul</h1>
            <p>
              Soul Sync is a private journaling space to reflect,
              track moods, and reconnect with yourself — gently,
              without pressure.
            </p>
            <a 
              href="#" 
              className="hero-cta"
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage('today')
              }}
            >Start Journaling</a>
          </div>

          <div className="col-lg-6 hero-image text-center">
            <img src={diaryImage} alt="Illustration" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero