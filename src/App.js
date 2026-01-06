import { useState } from 'react';
import './App.css';
import UserForm from './UserForm';

function App() {
  const [moods, setMoods] = useState([]);
  
  const moodOptions = [
    { emoji: '😊', name: 'Happy', color: '#FFD700' },
    { emoji: '😢', name: 'Sad', color: '#87CEEB' },
    { emoji: '😴', name: 'Tired', color: '#DDA0DD' },
    { emoji: '🔥', name: 'Energetic', color: '#FF6347' },
    { emoji: '😌', name: 'Chill', color: '#98FB98' }
  ];

  const addMood = (mood) => {
    const newMood = {
      ...mood,
      time: new Date().toLocaleTimeString(),
      id: Date.now()
    };
    setMoods([newMood, ...moods]);
  };

  return (
    <div className="App">
      <h1>🌈 Mood Tracker</h1>
      
      <UserForm />
      
      <div className="mood-buttons">
        {moodOptions.map(mood => (
          <button
            key={mood.name}
            onClick={() => addMood(mood)}
            style={{ backgroundColor: mood.color }}
            className="mood-btn"
          >
            {mood.emoji} {mood.name}
          </button>
        ))}
      </div>

      <div className="mood-history">
        <h2>Recent Vibes</h2>
        {moods.map(mood => (
          <div key={mood.id} className="mood-entry">
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-name">{mood.name}</span>
            <span className="mood-time">{mood.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
