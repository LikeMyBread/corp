import React, { useState, useEffect } from 'react';

import styles from './App.css';

const startTime = Date.now();

export default function App() {
  const [respect, setRespect] = useState(0);
  const [currentTime, setCurrentTime] = useState(startTime);

  useEffect(() => {
    let timer;
    const updateTimer = () => {
      setCurrentTime(Date.now());
      timer = setTimeout(updateTimer, 1000 - (Date.now() % 1000));
    };

    timer = setTimeout(updateTimer, 1000 - (Date.now() % 1000));
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={styles.container}>
      <h2>Corp clicker</h2>
      <p>
        Click to get respect. <i className="far fa-lightbulb" />
      </p>
      <p>Time since start time: {currentTime - startTime}</p>
      <button type="button" onClick={() => setRespect(respect + 1)}>
        Increase cat respect: {respect}
      </button>
      <CatRespecter respect={respect} />
    </div>
  );
}

function CatRespecter({ respect }: { respect: number }) {
  const cats: Array<String> = [];
  for (let i = 0; i < respect; i++) {
    cats.push('🐱');
  }
  return <>{cats}</>;
}
