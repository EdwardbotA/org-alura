import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  // Estado con Hooks useState() retorna una variable que puede ser number, string, boolean, array u object
  // y una funcion que sirve para actualizar la variable
  // recibe como argumento el valor inicial del estado
  // esto nos ayuda a guardar valores enviados por el usuario o conocer si un usuario esta o no logueado
  // tambien podemos tener lo estados que queramos
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: crypto.randomUUID(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: crypto.randomUUID(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: crypto.randomUUID(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      id: crypto.randomUUID(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: crypto.randomUUID(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: crypto.randomUUID(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: crypto.randomUUID(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: crypto.randomUUID(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );

    actualizarColaboradores(nuevosColaboradores);
  };

  // Actualizar Color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  // crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([
      ...equipos,
      { ...nuevoEquipo, id: crypto.randomUUID() },
    ]);
  };

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }

      return colaborador;
    });

    actualizarColaboradores(colaboradoresActualizados)
  };

  return (
    <div>
      <Header />{" "}
      {/* esto es lo mismo {Header()} o tambien esto <Header></Header> */}
      {mostrarFormulario && (
        <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      {/* conditional rendering fragments: <div></div>*/}
      {/* {mostrarFormulario ? <Form /> : <></>} esto hace lo mismo de arriba */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
