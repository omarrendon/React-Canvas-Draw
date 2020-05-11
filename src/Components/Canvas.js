import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import SecondCanvas from './SecondCanvas'
import Header from './Header'
import InputColor from "react-input-color";
import { Grid, Typography, TextField, Button, ButtonGroup } from "@material-ui/core";
import Styles from '../Styles/Canvas.module.css'
import SaveAltIcon from  "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Canvas = () => {
  const [initial, setInitial] = useState("#ee5253");
  const [color, setColor] = useState({});

  const [brush, setBrush] = useState(10);
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  const Draw = useRef(null);
  const secondDraw = useRef(null);

  const handleSave = () => {
    const data = Draw.current.getSaveData();
    console.log(data);
    secondDraw.current.loadSaveData(data, false);
  };

  const handleClear = () => {
    Draw.current.clear();
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
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Header />
      </Grid>

      <Grid item lg={2} md={4} sm={12} xs={12} className={Styles.container}>
        <Typography variant="h5" color="primary" className={Styles.Title}>
          {" "}
          TOOLS
        </Typography>

        <TextField
          label="Brush Size"
          type="number"
          variant="outlined"
          min={1}
          value={brush}
          onChange={brushSize}
          className={Styles.Cajas}
        />
        <hr />
        <TextField
          label="Width"
          type="number"
          variant="outlined"
          min={50}
          max={400}
          value={width}
          onChange={widthSize}
        />
        <hr />
        <TextField
          label="Height"
          type="number"
          variant="outlined"
          min={50}
          max={400}
          value={height}
          onChange={heightSize}
        />

        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          className={Styles.buttons}
        >
          <Button
            onClick={handleSave}
            variant="contained"
            color="secondary"
            startIcon={<SaveAltIcon />}
          >
            SAVE
          </Button>

          <Button
            onClick={handleClear}
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            CLEAN
          </Button>
          <Button
            onClick={handleBack}
            variant="contained"
            color="secondary"
            startIcon={<ArrowBackIcon />}
          >
            BACK
          </Button>
        </ButtonGroup>

        <Typography variant="h6" color="primary" className={Styles.Title}>
          Choose the color
        </Typography>
        <InputColor
          initialValue={initial}
          onChange={setColor}
          className={Styles.Chooser}
        />
      </Grid>

      <Grid item lg={5} md={4} sm={12} xs={12}>
        <Typography variant="h5" color="primary" className={Styles.Title}>
          CANVAS DRAW
        </Typography>
        <CanvasDraw
          brushRadius={brush}
          brushColor={color.hex}
          canvasWidth={width}
          canvasHeight={height}
          hideGrid={false}
          ref={Draw}
          className={Styles.Canvas}
        />
      </Grid>

      <Grid item lg={5} md={4} sm={12} xs={12}>
        <SecondCanvas ref={secondDraw} />
      </Grid>
    </Grid>
  );
};

export default Canvas;
