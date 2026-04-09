function Features() {
  return (
    <section className="features-section fade-section visible">
      <div className="features-container">

        <div className="features-header">
          <h2>A calmer way to journal</h2>
          <p>
            Thoughtfully designed features that help you reflect,
            feel safe, and write without pressure.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Guided Daily Prompts</h3>
            <p>Gentle prompts that help you begin writing naturally.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Mood Check-Ins</h3>
            <p>Check in with your emotions and notice patterns over time.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>Structured Entries</h3>
            <p>Optional sections like reflections or gratitude.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏷️</div>
            <h3>Tags & Filters</h3>
            <p>Organize entries and easily revisit past moments.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🪷</div>
            <h3>Daily Reflection Prompt</h3>
            <p>One calming question each day to ground your thoughts.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Private Mode</h3>
            <p>No streaks. No reminders. Write when it feels right.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features