import React from "react";
import { Link } from "react-router-dom";
import { CheckSquare, PlusCircle, Divide, Clock, Hash, List } from "lucide-react"; 

function Home() {
  const colorMap = {
    neutral:"hover:bg-neutral-500"
  };

  const projects = [
    { name: "Todo", path: "/todo", color: "neutral", icon: <CheckSquare /> },
    { name: "Counter", path: "/counter", color: "neutral", icon: <PlusCircle /> },
    { name: "Odd or Even", path: "/oddeven", color: "neutral", icon: <Divide /> },
    { name: "Timer", path: "/timer", color: "neutral", icon: <Clock /> },
    { name: "H-Counter", path: "/h-counter", color: "neutral", icon: <Hash /> },
    { name: "Pos || Neg", path: "/input", color: "neutral", icon: <List /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">List of Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {projects.map((project, i) => (
          <Link
            key={i}
            to={project.path}
            className={`p-6 bg-white shadow-md rounded-xl flex flex-col items-center gap-3 text-center font-medium text-gray-700 transition-all duration-300 hover:text-white hover:scale-105 ${colorMap[project.color]}`}
          >
            <span className="text-2xl">{project.icon}</span>
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
