import React from 'react';

const PredictionCard = () => {
  return (
    <div style={{ background: '#222', color: '#0f0', padding: '20px', borderRadius: '10px', marginTop: '30px' }}>
      <h2>¿Qué evento apocalíptico sucederá primero?</h2>
      <ul>
        <li>🔥 Colapso climático global</li>
        <li>🧠 Dominio total de la IA</li>
        <li>🦠 Nueva pandemia viral</li>
        <li>💣 Guerra nuclear</li>
      </ul>
    </div>
  );
};

export default PredictionCard;
