import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-24 flex justify-center content-center w-full flex-wrap">
        <div className="flex flex-wrap justify-center gap-2 bg-white border-orange-400 border p-2 rounded-full">
          <button
            className="bg-red-700 text-white px-4 py-0.5 cursor-pointer rounded-xl"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-700 text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("green")}
          v>
            Green
          </button>
          <button
            className="bg-blue-700 text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("blue")}
          v>
            Blue
          </button>
          <button
            className="bg-yellow-500 text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("yellow")}
          v>
            Yellow
          </button>
          <button
            className="bg-orange-400 text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("orange")}
          v>
            Orange
          </button>
          <button
            className="bg-black text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("black")}
          v>
            Black
          </button>
          <button
            className="bg-pink-500 text-white px-4 cursor-pointer rounded-xl"
            onClick={() => setColor("pink")}
          v>
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
