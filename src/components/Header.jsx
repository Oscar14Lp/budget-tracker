import React from 'react'

import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ( {presupuesto, setPresupuesto, isValidBudget, setIsValidBudget, gastos, setGastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidBudget ? (
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidBudget={setIsValidBudget}
          />
        ) : (

        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        />

        )}

        
    </header>
  )
}

export default Header