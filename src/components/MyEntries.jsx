import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

function MyEntries() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [filterType, setFilterType] = useState('all')

  // Fetch all user entries
  useEffect(() => {
    fetchEntries()
  }, [filterType])

  const fetchEntries = async () => {
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()

      let query = supabase
        .from('entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (filterType !== 'all') {
        query = query.eq('entry_type', filterType)
      }

      const { data, error } = await query

      if (error) throw error
      setEntries(data || [])
    } catch (error) {
      console.error('Error fetching entries:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteEntry = async (id) => {
    if (!confirm('Are you sure you want to delete this entry?')) return

    try {
      const { error } = await supabase
        .from('entries')
        .delete()
        .eq('id', id)

      if (error) throw error

      setEntries(entries.filter(e => e.id !== id))
      setSelectedEntry(null)
      alert('Entry deleted successfully!')
    } catch (error) {
      alert('Error deleting entry: ' + error.message)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getEntryTypeLabel = (type) => {
    const labels = {
      today: '📝 Today',
      insights: '💡 Insights',
      gratitude: '🙏 Gratitude'
    }
    return labels[type] || type
  }

  return (
    <div className="my-entries-page">
      <div className="my-entries-container">
        
        <div className="entries-header">
          <h1>My Entries</h1>
          <p>View, edit, and manage your journal entries</p>
        </div>

        {/* Filter buttons */}
        <div className="filter-buttons">
          <button 
            className={filterType === 'all' ? 'active' : ''}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button 
            className={filterType === 'today' ? 'active' : ''}
            onClick={() => setFilterType('today')}
          >
            📝 Today
          </button>
          <button 
            className={filterType === 'insights' ? 'active' : ''}
            onClick={() => setFilterType('insights')}
          >
            💡 Insights
          </button>
          <button 
            className={filterType === 'gratitude' ? 'active' : ''}
            onClick={() => setFilterType('gratitude')}
          >
            🙏 Gratitude
          </button>
        </div>

        {loading ? (
          <p className="loading-text">Loading your entries...</p>
        ) : entries.length === 0 ? (
          <div className="empty-state">
            <p>No entries yet. Start journaling to see them here!</p>
          </div>
        ) : (
          <div className="entries-grid">
            {entries.map((entry) => (
              <div 
                key={entry.id} 
                className="entry-card"
                onClick={() => setSelectedEntry(entry)}
              >
                <div className="entry-card-header">
                  <span className="entry-type">{getEntryTypeLabel(entry.entry_type)}</span>
                  <span className="entry-date">{formatDate(entry.created_at)}</span>
                </div>
                <div className="entry-preview">
                  {entry.entry_type === 'today' && (
                    <p>
                      <strong>{entry.content.mood?.emoji} {entry.content.mood?.label}</strong>
                      <br />
                      {entry.content.text?.substring(0, 100)}...
                    </p>
                  )}
                  {entry.entry_type === 'insights' && (
                    <p>
                      <strong>Wins:</strong> {entry.content.wins?.length || 0} | 
                      <strong> Priorities:</strong> {entry.content.priorities?.length || 0}
                    </p>
                  )}
                  {entry.entry_type === 'gratitude' && (
                    <p>
                      <strong>Grateful for:</strong> {entry.content.gratitudes?.length || 0} things
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Entry Details Modal */}
        {selectedEntry && (
          <div className="modal-overlay" onClick={() => setSelectedEntry(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{getEntryTypeLabel(selectedEntry.entry_type)}</h2>
                <button className="close-btn" onClick={() => setSelectedEntry(null)}>✕</button>
              </div>

              <div className="modal-body">
                <p className="entry-date-detail">{formatDate(selectedEntry.created_at)}</p>

                {selectedEntry.entry_type === 'today' && (
                  <>
                    <div className="detail-section">
                      <strong>Mood:</strong> {selectedEntry.content.mood?.emoji} {selectedEntry.content.mood?.label}
                    </div>
                    <div className="detail-section">
                      <strong>Entry:</strong>
                      <p>{selectedEntry.content.text}</p>
                    </div>
                  </>
                )}

                {selectedEntry.entry_type === 'insights' && (
                  <>
                    {selectedEntry.content.wins?.length > 0 && (
                      <div className="detail-section">
                        <strong>🌟 Wins:</strong>
                        <ul>
                          {selectedEntry.content.wins.map((win, i) => (
                            <li key={i}>{win}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEntry.content.priorities?.length > 0 && (
                      <div className="detail-section">
                        <strong>🎯 Priorities:</strong>
                        <ul>
                          {selectedEntry.content.priorities.map((priority, i) => (
                            <li key={i}>{priority}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedEntry.content.lingeringThoughts && (
                      <div className="detail-section">
                        <strong>💭 Lingering Thoughts:</strong>
                        <p>{selectedEntry.content.lingeringThoughts}</p>
                      </div>
                    )}
                    {selectedEntry.content.letGo && (
                      <div className="detail-section">
                        <strong>🍃 Let Go:</strong>
                        <p>{selectedEntry.content.letGo}</p>
                      </div>
                    )}
                  </>
                )}

                {selectedEntry.entry_type === 'gratitude' && (
                  <div className="detail-section">
                    <strong>🙏 Grateful for:</strong>
                    <ul>
                      {selectedEntry.content.gratitudes?.map((gratitude, i) => (
                        <li key={i}>{gratitude}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="modal-actions">
                <button 
                  className="delete-btn"
                  onClick={() => deleteEntry(selectedEntry.id)}
                >
                  Delete Entry
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MyEntries