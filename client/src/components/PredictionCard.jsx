import React, { useState } from 'react';

function PredictionCard() {
  const [selected, setSelected] = useState(null);

  const options = [
    { emoji: '🔥', text: 'Colapso climático global' },
    { emoji: '🧠', text: 'Dominio total de la IA' },
    { emoji: '🧬', text: 'Nueva pandemia viral' },
    { emoji: '☢️', text: 'Guerra nuclear' },
  ];

  const handleClick = (index) => {
    setSelected(index);
    console.log('Seleccionaste:', options[index].text);
  };

  return (
    <div style={{
      backgroundColor: '#222',
      padding: '2rem',
      borderRadius: '12px',
      color: 'lime',
      fontFamily: 'sans-serif',
      maxWidth: '800px',
      margin: '2rem auto'
    }}>
      <h2>¿Qué evento apocalíptico sucederá primero?</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            style={{
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px',
              backgroundColor: selected === index ? '#0f0' : '#333',
              marginBottom: '0.5rem'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>{option.emoji}</span>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PredictionCard;





