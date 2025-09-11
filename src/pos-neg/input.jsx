import React, { createContext, useContext, useState } from "react";
import Negative from "./negative";
import Positive from "./positive";

export const Context = createContext();

function MainInput() {
  const [num, setNum] = useState("");
  const [positive, setPositive] = useState([]);
  const [negative, setNegative] = useState([]);

  return (
    <Context.Provider value={{ num, setNum, positive, setPositive, negative, setNegative }}>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
        <Input />
        <div className="flex gap-6">
          <Positive />
          <Negative />
        </div>
      </div>
    </Context.Provider>
  );
}

function Input() {
  const { num, setNum, positive, setPositive, negative, setNegative } = useContext(Context);

  function check() {
    if (num === "" || isNaN(num)) {
      alert(" Enter a valid number");
      return;
    }
    const number = Number(num);

    if (number >= 0) {
      setPositive([...positive, number]);
    } else {
      setNegative([...negative, number]);
    }
    setNum("");
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Check Positive or Negative Number
      </h1>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          placeholder="Enter Number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={check}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default MainInput;
