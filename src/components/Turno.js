import React,{Fragment} from "react";

const Turno = ({turno,eliminarTurno}) =>(
    <div className="turno">
        <p>Cliente: <span>{turno.cliente}</span></p>
        <p>Fecha: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <p>Mensaje: <span>{turno.mensaje}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={()=>eliminarTurno(turno.id)}
        >Borrar</button>

    </div>
);

export default Turno;