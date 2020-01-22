import React from 'react';
import './input.css';

export default function Attempts(props) {
  const { letters } = props;

  return (
    <div className="failed__letters">
      {letters.map((letter, i) => (
        <div key={i}>{letter}</div>
      ))}
    </div>
  );
}
