import React, { useState, useEffect, useRef } from 'react';

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     if (storage) return JSON.parse(storage)[value];
//     return initialState;
//   };
//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify({ value }));
//   }, [value]);
//   return [value, setValue];
// };
const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const redefine = () => setCount(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count:${count}`);
    }, 2000);
    return () => clearInterval(id);
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
