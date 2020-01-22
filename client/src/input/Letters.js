import React from 'react';
import './input.css';

export default function Letters(props) {
  const { letters } = props;

  return (
    <div className="letters">
      {letters.map(({ letter, guessed }, i) => {
        if (guessed) return <span key={i}>{letter}</span>;
        else return <span key={i} />;
      })}
    </div>
  );
}
