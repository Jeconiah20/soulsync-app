import previewGif from '../preview-animation.gif'

function Preview({ setCurrentPage }) {
  return (
    <section className="preview-section fade-section visible">
      <div className="preview-container">

        <div className="preview-image">
          <img src={previewGif} alt="Soul Sync calming journaling illustration" />
        </div>

        <div className="preview-content">
          <h2>Your thoughts, beautifully organized</h2>
          <p>
            Soul Sync gives you a gentle space to reflect,
            write honestly, and reconnect with yourself —
            without pressure or streaks.
          </p>

          <ul className="preview-points">
            <li>🌿 Mood check-ins before each entry</li>
            <li>✍️ Gentle daily prompts to guide writing</li>
            <li>🔒 Private mode with no streak pressure</li>
          </ul>

          <a 
            href="#" 
            className="preview-btn"
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage('today')
            }}
          >Start Journaling</a>
        </div>

      </div>
    </section>
  )
}

export default Preview