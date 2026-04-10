import { useState } from 'react'

function Gratitude() {
  const [gratitudes, setGratitudes] = useState(['', '', ''])

  const updateGratitude = (index, value) => {
    const newGratitudes = [...gratitudes]
    newGratitudes[index] = value
    setGratitudes(newGratitudes)
  }

  return (
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

        {/* Save Button */}
        <button className="save-gratitude-btn">Save Gratitude</button>

      </div>
    </div>
  )
}

export default Gratitude