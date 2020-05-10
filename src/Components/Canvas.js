import React, {useRef} from 'react'
import CanvasDraw from "react-canvas-draw";

const Canvas = () => {
  const Draw = useRef(null);
  const secondDraw = useRef(null);

  const handleSave = () => {
    const data = Draw.current.getSaveData();
    console.log(data);
    secondDraw.current.loadSaveData((data) , (false));
  };

  const handleClear = () => {
    Draw.current.clear()
  };

  const handleBack = () => {
    Draw.current.undo();
  }
  return (
    <div>
      <button onClick={handleSave}> Guardar!</button>
      <button onClick={handleClear}> Limpiar </button>
      <button onClick={handleBack}> Atras</button>
      <CanvasDraw
        brushRadius={5}
        brushColor={"red"}
        canvasWidth={600}
        canvasHeight={200}
        hideGrid={false}
        ref={Draw}
      />
      <hr />
      <CanvasDraw 
        hideGrid={true} 
        disabled={true} 
        ref={secondDraw} 
      />
    </div>
  );
}

export default Canvas
