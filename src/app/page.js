"use client"; 
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
  const [gr, setGrMl] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [precioKiloLitro, setPrecioKilo] = useState(0);

  const [cantidad_rollos, setCantidadRollos] = useState(0);
  const [metros_rollo, setMetrosRollo] = useState(0);
  const [precioConfort, setPrecioConfort] = useState(0);
  const [precioPorMetroConfort, setPrecioMetroConfort] = useState(0);

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
    setGrMl(0);
    setPrecio(0);
    setPrecioKilo(0);
  }

  const limpiarConfort = () => {
    setCantidadRollos(0);
    setMetrosRollo(0);
    setPrecioConfort(0);
    setPrecioMetroConfort(0);
  }
  
  return (
    <main className="px-4">
      <h1 className="my-4 mb-7 text-center text-slate-400">Asistente de compras</h1>
      <div className="flex flex-col gap-4">
        <section className="flex flex-col gap-2 my-3">
          <div className="flex gap-2 mb-2">
            <h4>Calcular precio por Kg/Lt</h4>
              <DeleteIcon className="text-red-600"  onClick={limpiarKg}/>
          </div>
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
            />

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
            />
          </div>
        </section>

        <section className="flex flex-col gap-2 my-3">
          <div className="flex gap-2 mb-2">
            <h4>Calcular precio por metro de confort</h4>
            <DeleteIcon className="text-red-600"  onClick={limpiarConfort}/>
          </div>
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
              variant="outlined"
              value={precioConfort}            
              onChange={handlePrecioConfort}
              style={{ backgroundColor: "white" }}
            />
            <Button onClick={ calcularTotalMetroConfort } variant="contained" color="primary">
              Calcular
            </Button>
            <TextField
              id="outlined-basic"
              label="Precio por metro de confort"
              variant="outlined"
              value={precioPorMetroConfort}
              style={{ backgroundColor: "white" }}
              disabled
            />
          </div>
        </section>
      </div>
    </main>
  );
}
