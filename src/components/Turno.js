import React from "react";
import Proptypes from 'prop-types';

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


Turno.propTypes = {
    turno : Proptypes.object.isRequired,
    eliminarTurno : Proptypes.func.isRequired 
} 

export default Turno;