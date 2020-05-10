import React, {useRef, useState} from 'react'
import CanvasDraw from "react-canvas-draw";

const Canvas = () => {
  const [brush, setBrush] = useState(1);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

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
  };

  const brushSize = event => {
    setBrush(parseInt(event.target.value, 10));
  };

  const widthSize = event => {
    setWidth(parseInt(event.target.value, 10));
  };

  const heightSize = event => {
    setHeight(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <span>Tamaño de la brocha</span>
      <input type="number" min={1} value={brush} onChange={brushSize} />

      <span>Ancho</span>
      <input type="number" min={50} value={width} onChange={widthSize} />

      <span>Alto</span>
      <input type="number" min={50} value={height} onChange={heightSize} />
      <button onClick={handleSave}> Guardar!</button>
      <button onClick={handleClear}> Limpiar </button>
      <button onClick={handleBack}> Atras</button>

      <CanvasDraw
        brushRadius={brush}
        brushColor={"red"}
        canvasWidth={width}
        canvasHeight={height}
        hideGrid={false}
        ref={Draw}
      />
      <hr />
      <CanvasDraw hideGrid={true} disabled={true} ref={secondDraw} />
    </div>
  );
}

export default Canvas
