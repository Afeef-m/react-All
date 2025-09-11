import React, { useReducer } from 'react'

function Reducer(state, action) {
  switch (action.type) {
    case "res":
      return { count: 0 } 
    case "inc":
      return { count: state.count + 1 }
    case "dec":
      return { count: state.count - 1 }
    default:
      return state
  }
}

function HCounter() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-gray-800">Count: {state.count}</h2>

      <div className="flex gap-3">
        <button 
          onClick={() => dispatch({ type: "res" })} 
          className="px-4 py-2 bg-slate-400 text-white rounded-lg shadow hover:bg-slate-600 transition"
        >
          Reset
        </button>

        <button 
          onClick={() => dispatch({ type: "inc" })} 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
        >
          Increment
        </button>

        <button 
          onClick={() => dispatch({ type: "dec" })} 
          className="px-4 py-2 bg-zinc-700 text-white rounded-lg shadow hover:bg-zinc-900 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default HCounter
