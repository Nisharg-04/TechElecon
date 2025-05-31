import { useState } from "react";
import "./App.css";

const COLORS = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Blue", value: "blue" },
  { name: "Aqua", value: "aqua" },
  { name: "Purple", value: "purple" },
  { name: "Pink", value: "pink" },
  { name: "Yellow", value: "yellow" },
  { name: "Orange", value: "orange" },
  { name: "Teal", value: "teal" },
  { name: "Gray", value: "gray" },
  { name: "Black", value: "black" },
  { name: "White", value: "white" },
  { name: "Olive", value: "olive" },
  { name: "Brown", value: "brown" },
  { name: "Gold", value: "gold" },
  { name: "Indigo", value: "indigo" },
  { name: "Cyan", value: "cyan" },
  { name: "Magenta", value: "magenta" },
];

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="fixed inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: color,
        transition: "background 0.4s",
      }}
    >
      <div className="z-10 bg-white/80 rounded-xl shadow-lg p-10 mt-24 mb-32">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-gray-800 drop-shadow">
          Background Color Changer
        </h1>
        <p className="text-center text-gray-600 mb-2">
          Select a color below to change the background!
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 z-20">
        <div className="bg-white/90 rounded-2xl shadow-xl px-6 py-4 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {COLORS.map((col) => (
            <button
              key={col.value}
              onClick={() => setColor(col.value)}
              className={`px-4 py-2 rounded-lg font-semibold shadow transition-transform duration-150 hover:scale-110 border-0 outline-none ring-2 ${
                color === col.value
                  ? "ring-gray-800 ring-offset-2"
                  : "ring-transparent"
              }`}
              style={{
                backgroundColor: col.value,
                color: ["yellow", "white", "aqua", "gold", "cyan"].includes(
                  col.value
                )
                  ? "#222"
                  : "#fff",
              }}
            >
              {col.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
