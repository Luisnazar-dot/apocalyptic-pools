import React, { useState, useEffect } from 'react';

const events = [
  { emoji: "🔥", label: "Colapso climático global" },
  { emoji: "🧠", label: "Dominio total de la IA" },
  { emoji: "🦠", label: "Nueva pandemia viral" },
  { emoji: "☢️", label: "Guerra nuclear" }
];

const PredictionCard = () => {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState({});

  // Simular datos o cargar desde localStorage
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(storedVotes);
  }, []);

  const handleVote = (label) => {
    if (selected) return;

    const updatedVotes = {
      ...votes,
      [label]: (votes[label] || 0) + 1
    };

    localStorage.setItem("votes", JSON.stringify(upda

