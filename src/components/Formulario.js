import React, {Fragment,useState} from "react";
import Proptypes from 'prop-types';
import uuid from 'uuid/dist/v4'

const Formulario = ({agregarTurno}) =>{

    // Estado de turnos
    const [ turno, actualizarTurno] = useState({
        cliente:'',
        fecha:'',
        hora:'',
        mensaje:'',
    });

    // Estado de errores

    const [ error, actualizarError] = useState(false);

    const actualizarState = e =>{
        actualizarTurno({
            ...turno,
            [e.target.name]:e.target.value
        })
    }

    //  Extraer valores

    const { cliente, fecha, hora, mensaje} = turno;

    // Enviar tarea
    const enviarTurno = e =>{
        e.preventDefault();

        // Validar valores

        if(cliente.trim() === '' || fecha.trim() === '' || hora.trim() === '' || mensaje.trim() === '' ){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        // Asignar ID
        turno.id = uuid();

        // Crear turno
        agregarTurno(turno);

        // Reiniciar formulario

        actualizarTurno({
            cliente:'',
            fecha:'',
            hora:'',
            mensaje:'',
        });
    }

    return(
        <Fragment>
            <h2>Crear turno</h2>
            {error ? <p className="alerta-error">todos los campos son obligatorios</p>:null}
            <form
                onSubmit={enviarTurno}
            >
                <label>Cliente</label>
                <input 
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre del cliente"
                    onChange={actualizarState}
                    value={cliente}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Mensaje</label>
                <textarea
                    className="u-full-width"
                    name="mensaje"
                    onChange={actualizarState}
                    value={mensaje}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar turno</button>
            </form>
        </Fragment>
    )
}


Formulario.propTypes = {
     agregarTurno: Proptypes.func.isRequired
}

export default Formulario;