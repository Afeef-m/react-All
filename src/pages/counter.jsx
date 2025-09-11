import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h3 className="text-2xl font-bold text-gray-800">Counter: {count}</h3>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-slate-500 text-white rounded-lg shadow hover:bg-slate-600 transition"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-zinc-500 text-white rounded-lg shadow hover:bg-zinc-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
