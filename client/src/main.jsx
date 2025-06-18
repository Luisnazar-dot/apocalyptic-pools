import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ color: 'lime', fontSize: '2rem', padding: '2rem' }}>
      Apocalyptic Pools está VIVO ⚡
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

