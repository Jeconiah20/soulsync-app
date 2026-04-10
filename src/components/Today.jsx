import { useState } from 'react'

function Today() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [showMoodMenu, setShowMoodMenu] = useState(false)

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😌', label: 'Calm' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😰', label: 'Anxious' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '🤔', label: 'Thoughtful' },
    { emoji: '😴', label: 'Tired' },
    { emoji: '😐', label: 'Neutral' }
  ]

  return (
    <div className="today-page">
      <div className="today-container">
        
        <div className="today-header">
          <h1>How are you feeling today?</h1>
          <p>Take a moment to check in with yourself</p>
        </div>

        {/* Mood selector */}
        <div className="mood-selector">
          <button 
            className="mood-toggle-btn"
            onClick={() => setShowMoodMenu(!showMoodMenu)}
          >
            {selectedMood ? (
              <span>{selectedMood.emoji} {selectedMood.label}</span>
            ) : (
              <span>Select your mood ☁️</span>
            )}
          </button>

          {showMoodMenu && (
            <div className="mood-menu">
              {moods.map((mood, index) => (
                <button
                  key={index}
                  className={`mood-option ${selectedMood?.label === mood.label ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedMood(mood)
                    setShowMoodMenu(false)
                  }}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <span className="mood-label">{mood.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Writing area */}
        <div className="writing-area">
          <textarea 
            placeholder="Start writing your thoughts..."
            rows="15"
          />
        </div>

        {/* Save button */}
        <button className="save-btn">Save Entry</button>

      </div>
    </div>
  )
}

export default Today