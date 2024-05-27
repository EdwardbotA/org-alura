import "./ListaOpciones.css";

const ListaOpciones = (props) => {

  const manejarCambio = (event) => {
    props.actualizarEquipo(event.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Selecionar equipo
        </option>
        {/* react necesita de un identificador unico para funcionar por eso traemos en index */}
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
