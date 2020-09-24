import React, { Component, useState, useEffect } from 'react';

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[value];
    return initialState;
  };
  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);
  return [value, setValue];
};
const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const redefine = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);
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
