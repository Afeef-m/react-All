import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function add() {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  }

  function del(index) {
    setList(list.filter((_, ind) => ind !== index));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={add}
          className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-800 transition"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {list.map((item, ind) => (
          <li
            key={ind}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
          >
            <span className="text-gray-700">{item}</span>
            <button
              onClick={() => del(ind)}
              className="px-3 py-1 bg-zinc-400 text-white rounded-lg hover:bg-zinc-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
