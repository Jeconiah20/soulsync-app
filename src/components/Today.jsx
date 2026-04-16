import { useState } from 'react'
import { supabase } from '../supabaseClient'

function Today() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [showMoodMenu, setShowMoodMenu] = useState(false)
  const [entryText, setEntryText] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

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

  const handleSave = async () => {
    if (!selectedMood || !entryText.trim()) {
      setMessage('Please select a mood and write something!')
      return
    }

    setSaving(true)
    setMessage('')

    try {
      const { data: { user } } = await supabase.auth.getUser()

      const { error } = await supabase
        .from('entries')
        .insert({
          user_id: user.id,
          entry_type: 'today',
          content: {
            mood: selectedMood,
            text: entryText
          }
        })

      if (error) throw error

      setMessage('✅ Entry saved successfully!')
      setEntryText('')
      setSelectedMood(null)
      
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('❌ Error saving entry: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

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
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            rows="15"
          />
        </div>

        {message && <p className="save-message">{message}</p>}

        {/* Save button */}
        <button 
          className="save-btn" 
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Entry'}
        </button>

      </div>
    </div>
  )
}

export default Today