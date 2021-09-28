import React, { useState } from 'react';

import styles from './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h2>Corp clicker</h2>
      <p>
        Click to get respect. <i className="far fa-lightbulb"></i>
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase cat count: {count}
      </button>
      <CatCounter count={count} />
    </div>
  );
}

function CatCounter({count}: {count: number}) {
  let cats: Array<String> = [];
  for (let i = 0; i < count; i++) {
    cats.push('🐱');
  }
  return (
    <>
      {cats}
    </>
  );
}
