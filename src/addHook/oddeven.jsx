import React, { createContext, useContext, useState } from "react";

const NumberContext = createContext();

function OddEven() {
  const [num, setNum] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Odd or Even Checker</h1>

      <NumberContext.Provider value={{ num, setNum }}>
        <Inp />
      </NumberContext.Provider>
    </div>
  );
}

function Inp() {
  const { num, setNum } = useContext(NumberContext);

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        className="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div
        className={`text-lg font-semibold ${
          num % 2 === 0 ? "text-neutral-900" : "text-gray-500"
        }`}
      >
        {num % 2 === 0 ? " Even Number" : " Odd Number"}
      </div>
    </div>
  );
}

export default OddEven;
