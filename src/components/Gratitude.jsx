import { useState } from 'react'
import { supabase } from '../supabaseClient'

function Gratitude() {
  const [gratitudes, setGratitudes] = useState(['', '', ''])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const updateGratitude = (index, value) => {
    const newGratitudes = [...gratitudes]
    newGratitudes[index] = value
    setGratitudes(newGratitudes)
  }

  const handleSave = async () => {
    const hasContent = gratitudes.some(g => g.trim())

    if (!hasContent) {
      setMessage('Please write at least one thing you\'re grateful for!')
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
          entry_type: 'gratitude',
          content: {
            gratitudes: gratitudes.filter(g => g.trim())
          }
        })

      if (error) throw error

      setMessage('✅ Gratitude saved successfully!')
      setGratitudes(['', '', ''])
      
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('❌ Error saving gratitude: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="gratitude-page">
        <div className="gratitude-container">
          
          <div className="gratitude-header">
            <h1>Today's Gratitude</h1>
            <p>What are you grateful for today?</p>
          </div>

          {/* Gratitude prompt */}
          <div className="gratitude-prompt">
            <span className="gratitude-icon">🙏</span>
            <p>Take a moment to appreciate three things from your day</p>
          </div>

          {/* 3 Gratitude inputs */}
          <div className="gratitude-list">
            {gratitudes.map((gratitude, index) => (
              <div key={index} className="gratitude-item">
                <div className="gratitude-number">{index + 1}</div>
                <textarea
                  placeholder="I am grateful for..."
                  value={gratitude}
                  onChange={(e) => updateGratitude(index, e.target.value)}
                  rows="3"
                  className="gratitude-textarea"
                />
              </div>
            ))}
          </div>

          {message && <p className="save-message">{message}</p>}

          {/* Save Button */}
          <button 
            className="save-gratitude-btn"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Gratitude'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default Gratitude