import React, { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidBudget}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0 ) {
            setMensaje('No es un presupuesto válido');

            return
        }
        setMensaje('');
        setIsValidBudget(true);
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handlePresupuesto} action="" className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>

                <input 
                type="number"
                className='nuevo-presupuesto'
                placeholder='Añade tu Presupuesto'
                value={presupuesto}
                onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>

                <input type="submit" value="añadir" />

                {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje> }
        </form>
    </div>
  )
}

export default NuevoPresupuesto