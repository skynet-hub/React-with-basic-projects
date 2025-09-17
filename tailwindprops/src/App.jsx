import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap bottom-11 justify-center inset-x-0 px-2">
          <div className="flex flex-wrap shadow-lg justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
             onClick={() => setColor('green')} style={{ backgroundColor: "green"}}>Green</button>
             <button className="outline-none px-4 py-1 rounded-full text-grey shadow-lg"
               onClick={() => setColor('yellow')} style={{ backgroundColor: "yellow"}}>Yellow</button>
              <button className="outline-none px-4 py-1 rounded-full text-grey shadow-lg" 
               onClick={() => setColor('violet')} style={{ backgroundColor: "violet"}}>Violet</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
               onClick={() => setColor('orange')}style={{ backgroundColor: "orange"}}>Orange</button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
               onClick={() => setColor('purple')} style={{ backgroundColor: "purple"}}>Purple</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;