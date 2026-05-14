import { useState } from 'react'
import { supabase } from '../supabaseClient'

function TodaysInsights() {
  const [wins, setWins] = useState(['', '', ''])
  const [priorities, setPriorities] = useState(['', '', ''])
  const [lingeringThoughts, setLingeringThoughts] = useState('')
  const [letGo, setLetGo] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const updateWin = (index, value) => {
    const newWins = [...wins]
    newWins[index] = value
    setWins(newWins)
  }

  const updatePriority = (index, value) => {
    const newPriorities = [...priorities]
    newPriorities[index] = value
    setPriorities(newPriorities)
  }

  const handleSave = async () => {
    const hasContent = wins.some(w => w.trim()) || 
                      priorities.some(p => p.trim()) || 
                      lingeringThoughts.trim() || 
                      letGo.trim()

    if (!hasContent) {
      setMessage('Please fill in at least one section!')
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
          entry_type: 'insights',
          content: {
            wins: wins.filter(w => w.trim()),
            priorities: priorities.filter(p => p.trim()),
            lingeringThoughts,
            letGo
          }
        })

      if (error) throw error

      setMessage('✅ Insights saved successfully!')
      setWins(['', '', ''])
      setPriorities(['', '', ''])
      setLingeringThoughts('')
      setLetGo('')
      
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('❌ Error saving insights: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="insights-page">
        <div className="insights-container">
          
          <div className="insights-header">
            <h1>Today's Insights</h1>
            <p>Reflect on your day and prepare for tomorrow</p>
          </div>

          {/* My Top 3 Wins */}
          <div className="insight-section">
            <h2>🌟 My Top 3 Wins of Today</h2>
            <div className="wins-list">
              {wins.map((win, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Win #${index + 1}`}
                  value={win}
                  onChange={(e) => updateWin(index, e.target.value)}
                  className="insight-input"
                />
              ))}
            </div>
          </div>

          {/* Top 3 Priorities for Tomorrow */}
          <div className="insight-section">
            <h2>🎯 Top 3 Priorities for Tomorrow</h2>
            <div className="priorities-list">
              {priorities.map((priority, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Priority #${index + 1}`}
                  value={priority}
                  onChange={(e) => updatePriority(index, e.target.value)}
                  className="insight-input"
                />
              ))}
            </div>
          </div>

          {/* Lingering Thoughts */}
          <div className="insight-section">
            <h2>💭 Any Lingering Thoughts for Today</h2>
            <textarea
              placeholder="What's still on your mind?"
              value={lingeringThoughts}
              onChange={(e) => setLingeringThoughts(e.target.value)}
              rows="6"
              className="insight-textarea"
            />
          </div>

          {/* Let Go Of */}
          <div className="insight-section">
            <h2>🍃 Let Go Of</h2>
            <textarea
              placeholder="What do you need to release?"
              value={letGo}
              onChange={(e) => setLetGo(e.target.value)}
              rows="4"
              className="insight-textarea"
            />
          </div>

          {message && <p className="save-message">{message}</p>}

          {/* Save Button */}
          <button 
            className="save-insights-btn"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Today\'s Insights'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default TodaysInsights