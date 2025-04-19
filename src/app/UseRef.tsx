'use client'
import { useRef } from "react";

function ChangeBackground() {
  const divRef = useRef<HTMLDivElement>(null);

  const changeColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    }
  };



  return (
    <div>
      <div ref={divRef} className="w-[200px] h-[100px] bg-gray-400" >
        Click the button to change my color!
      </div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
export default ChangeBackground;