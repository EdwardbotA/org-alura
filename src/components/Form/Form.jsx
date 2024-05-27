import { useState } from "react";
import "./Form.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (event) => {
    event.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };

    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (event) => {
    event.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          required
          titulo="Nombre"
          placeholder="Ingresar nombre"
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          required
          titulo="Puesto"
          placeholder="Ingresar puesto"
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          required
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo
          required
          titulo="Titulo"
          placeholder="Ingresar titulo"
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          required
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          valor={color}
          actualizarValor={actualizarColor}
          type='color'
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Form;
