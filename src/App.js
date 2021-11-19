import React,{Fragment,useState} from "react";

import Formulario from "./components/Formulario";
import Turno from "./components/Turno";

function App() {

  // Array de turnos
  const [turnos,guardarTurnos] = useState([]);


  // Agregar turnos

  const agregarTurno = turno =>{
    guardarTurnos([
      ...turnos,
      turno 
    ])
  };

 // Eliminar turno
  const eliminarTurno = id =>{
    const turnosNuevo = turnos.filter(turno => turno.id !== id);
    guardarTurnos(turnosNuevo);
  }


  return (
    <Fragment>
        <h1>Administrador de turnos</h1>

        <div className="container"> 
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarTurno={agregarTurno}
                />
              </div>
              <div className="one-half column">
                <h2>Turnos agendados</h2>
                {turnos.map(turno =>(
                  <Turno
                    key={turno.id} 
                    turno={turno}
                    eliminarTurno={eliminarTurno}
                  />
                ))}

              </div>
            </div>
        </div>

    </Fragment>
  );
}

export default App;
