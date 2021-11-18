import React, {Fragment,useState} from "react";


const Formulario = () =>{

    // Estado de turnos

    const [turno,actualizarTurno] = useState({
        cliente:'',
        fecha:'',
        hora:'',
        turno:'',
    })

    const actualizarState = (e) =>{
        console.log('Escribiendo...');
    }


    return(
        <Fragment>
            <h2>Crear turno</h2>

            <form>
                <label>Cliente</label>
                <input 
                    type="text"
                    name="cliente"
                    className="u-full-width"
                    placeholder="Nombre del cliente"
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Tipo de turno</label>
                <textarea
                    className="u-full-width"
                    name="turno"
                    onChange={actualizarState}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar turno</button>
            </form>


        </Fragment>
    )
}

export default Formulario;