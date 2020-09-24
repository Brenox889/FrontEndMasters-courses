import React, { Component, useState, useEffect } from 'react';

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const redefine = () => setCount(0);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={redefine}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
