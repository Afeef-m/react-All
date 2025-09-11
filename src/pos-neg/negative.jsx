import React, { useContext } from "react";
import { Context } from './input'

function Negative() {
  const { negative } = useContext(Context);

  return (
    <div className="bg-red-100 border border-red-300 rounded-lg p-4 w-60 shadow-md">
      <h3 className="text-lg font-semibold text-red-700 mb-3">
        Negative Numbers
      </h3>
      {negative.length === 0 ? (
        <p className="text-gray-500 italic">No negative numbers yet</p>
      ) : (
        <ul className="space-y-2">
          {negative.map((n, i) => (
            <li
              key={i}
              className="bg-red-200 text-red-800 px-3 py-1 rounded-lg shadow-sm"
            >
              {n}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Negative;
