"use client"; 
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "./components/Footer/Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import InputAdornment from '@mui/material/InputAdornment';

export default function Home() {
  const [gr, setGrMl] = useState('');
  const [precio, setPrecio] = useState('');
  const [precioKiloLitro, setPrecioKilo] = useState('');

  const [cantidad_rollos, setCantidadRollos] = useState('');
  const [metros_rollo, setMetrosRollo] = useState('');
  const [precioConfort, setPrecioConfort] = useState('');
  const [precioPorMetroConfort, setPrecioMetroConfort] = useState('');

  const handleChange = (event) => {
    setGrMl(Number(event.target.value));
  };
  const handlePrecio = (event) => {
    setPrecio(Number(event.target.value));
  }
  const handlePrecioKilo = (event) => {
    setPrecioKilo(Number(event.target.value));
  }
  const calcularTotalKiloLitro = () => {
    setPrecioKilo(1000/gr * precio);
  }

  const handleChangeCantidadRollos = (event) => {
    setCantidadRollos(Number(event.target.value));
  }
  const handleChangeMetrosRollo = (event) => {
    setMetrosRollo(Number(event.target.value));
  }
  const handlePrecioConfort = (event) => {
    setPrecioConfort(Number(event.target.value));
  }
  const handlePrecioMetroConfort = (event) => {
    setPrecioMetroConfort(Number(event.target.value));
  }

  const calcularTotalMetroConfort = () => {
    console.log(cantidad_rollos, metros_rollo, precioConfort);
    setPrecioMetroConfort( (precioConfort / (cantidad_rollos * metros_rollo)).toFixed(2) );
  }

  const limpiarKg = () => {
    setGrMl('');
    setPrecio('');
    setPrecioKilo('');
  }

  const limpiarConfort = () => {
    setCantidadRollos('');
    setMetrosRollo('');
    setPrecioConfort('');
    setPrecioMetroConfort('');
  }
  
  return (
    <>
    <main className=" justify-center px-4 h-[100%]">
      <h1 className="my-4 mb-7 text-center text-slate-400">Asistente de compras</h1>
      <div className="justify-center flex flex-col gap-4">
        <Card className="2xl:w-3/5 mx-auto p-3 flex flex-col gap-2 my-3">
          <div className="flex gap-2 mb-2">
            <h4>Calcular precio por kg/Lt</h4>
              <DeleteIcon className="text-red-600"  onClick={limpiarKg}/>
          </div>
          <CardActions className="flex flex-col gap-2">
            <div className="flex gap-2">
              <TextField
                value={gr}
                onChange={handleChange}
                id="outlined-basic"
                label="gr / ml"
                variant="outlined"
                type="number" // Asegúrese de que el campo solo acepte números
                style={{ backgroundColor: "white" }}
              />
              <TextField
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                value={precio}
                style={{ backgroundColor: "white" }}
                onChange={handlePrecio}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={ calcularTotalKiloLitro } variant="contained" color="primary">
                Calcular
              </Button>
              <TextField
                id="outlined-basic"
                label="Precio por kilo / litro"
                variant="outlined"
                value={precioKiloLitro}
                style={{ backgroundColor: "white" }}
                disabled
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              </div>          
          </CardActions>
        </Card>

        <Card className="2xl:w-3/5 mx-auto p-3 flex flex-col gap-2 my-3">
          <div className="flex gap-2 mb-2">
            <h4>Calcular precio por metro de papel higiénico</h4>
            <DeleteIcon className="text-red-600" onClick={limpiarConfort}/>
          </div>
          <CardActions className="flex flex-col gap-2">
            <div className="flex gap-2">
              <TextField
                id="outlined-basic"
                label="Cantida de rollos"
                variant="outlined"
                type="number" // Asegúrese de que el campo solo acepte números
                value={cantidad_rollos}
                onChange={handleChangeCantidadRollos}
                style={{ backgroundColor: "white" }}
              />
              <TextField
                id="outlined-basic"
                label="Metros por rollo"
                variant="outlined"
                value={metros_rollo}
                onChange={handleChangeMetrosRollo}
                style={{ backgroundColor: "white" }}
              />
              <TextField
                id="outlined-basic"
                label="Precio"
                type="number"
                variant="outlined"
                value={precioConfort}            
                onChange={handlePrecioConfort}
                style={{ backgroundColor: "white" }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={ calcularTotalMetroConfort } variant="contained" color="primary">
                Calcular
              </Button>

              <TextField
                id="outlined-basic"
                label="Precio por metro de papel higiénico"
                variant="outlined"
                value={precioPorMetroConfort}
                style={{ backgroundColor: "white" }}
                disabled
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    </main>
      <Footer />
    </>
  );
}
