function HowItWorks() {
  return (
    <section className="how-it-works-section fade-section visible">
      <div className="how-it-works-container">

        <div className="how-it-works-header">
          <h2>How Soul Sync Works</h2>
          <p>
            A simple, pressure-free journaling flow designed
            to help you slow down and reflect.
          </p>
        </div>

        <div className="steps-grid">

          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon">☁️</div>
            <h3>Check in with your mood</h3>
            <p>Start by gently acknowledging how you feel — no labels, no judgment.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon">✍️</div>
            <h3>Write with a prompt</h3>
            <p>Use a calming daily prompt to guide your thoughts without overthinking.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon">🔒</div>
            <h3>Save & reflect privately</h3>
            <p>Your thoughts stay private. Reflect anytime, without streaks or pressure.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks