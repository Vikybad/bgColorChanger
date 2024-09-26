import { useState } from "react";
import './output.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=> setColor("red")} style={{ backgroundColor: "red" }} >
              red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=> setColor("blue")} style={{ backgroundColor: "blue" }} >
              blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=> setColor("olive")} style={{ backgroundColor: "olive" }} >
              olive
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=> setColor("black")} style={{ backgroundColor: "black" }} >
              black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
