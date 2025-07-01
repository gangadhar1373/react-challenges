import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='p-4 bg-gray-100 rounded-xl text-center font-sans'>
      <p className='text-2xl font-bold mb-4'>Count: {count}</p>
      <button
        className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        onClick={() => setCount(Math.max(count - 1, 0))}
      >
        Decrement
      </button>
    </div>
  );
};
