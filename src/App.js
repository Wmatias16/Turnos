import React,{Fragment,useState, useEffect} from "react";

import Formulario from "./components/Formulario";
import Turno from "./components/Turno";

function App() {


  // Turnos en local storage
  let turnosIniciales = JSON.parse(localStorage.getItem('Turnos')); 

  if(!turnosIniciales){
      turnosIniciales = [];
  }

  // Array de turnos
  const [turnos,guardarTurnos] = useState(turnosIniciales);

  useEffect(()=>{
    if(turnosIniciales){
      localStorage.setItem('Turnos',JSON.stringify(turnos));
    }else{
      localStorage.setItem('Turnos',JSON.stringify([]));
    }
  }, [ turnos, turnosIniciales ] );

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


  const titulo = turnos.length === 0 ? 'No hay turnos': 'Administrar turnos';

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
                <h2>{titulo}</h2>
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
