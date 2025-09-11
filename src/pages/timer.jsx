import React, { useRef, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef(null);

  function Start() {
    if (interval.current !== null) return; 
    interval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 100); 
  }

  function Stop() {
    clearInterval(interval.current);
    interval.current = null;
  }

  function Reset() {
    clearInterval(interval.current);
    interval.current = null;
    setTimer(0);
  }

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Timer  {minutes} : {seconds}
      </h2>

      <div className="flex gap-4">
        <button
          onClick={Start}
          className="px-4 py-2 bg-slate-400 text-white rounded-lg shadow hover:bg-slate-600 transition"
        >
          Start
        </button>

        <button
          onClick={Stop}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
        >
          Stop
        </button>

        <button
          onClick={Reset}
          className="px-4 py-2 bg-zinc-700 text-white rounded-lg shadow hover:bg-zinc-900 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
