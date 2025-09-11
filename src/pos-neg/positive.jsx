import React, { useContext } from "react";
import { Context } from "./input";

function Positive() {
  const { positive } = useContext(Context);

  return (
    <div className="bg-green-100 border border-green-300 rounded-lg p-4 w-60 shadow-md">
      <h3 className="text-lg font-semibold text-green-700 mb-3">
        Positive Numbers
      </h3>
      {positive.length === 0 ? (
        <p className="text-gray-500 italic">No positive numbers yet</p>
      ) : (
        <ul className="space-y-2">
          {positive.map((p, i) => (
            <li
              key={i}
              className="bg-green-200 text-green-800 px-3 py-1 rounded-lg shadow-sm"
            >
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Positive;
