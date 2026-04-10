import { useState } from 'react'

function TodaysInsights() {
  const [wins, setWins] = useState(['', '', ''])
  const [priorities, setPriorities] = useState(['', '', ''])
  const [lingeringThoughts, setLingeringThoughts] = useState('')
  const [letGo, setLetGo] = useState('')

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

  return (
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

        {/* Save Button */}
        <button className="save-insights-btn">Save Today's Insights</button>

      </div>
    </div>
  )
}

export default TodaysInsights