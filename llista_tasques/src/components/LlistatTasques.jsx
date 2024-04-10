import React, { useState } from 'react'
import FormulariTasques from './FormulariTasques'
import Tasca from './Tasca'

const LlistatTasques = () => {
    const [tasques, setTasques] = useState([]);

    const afegirTasca = tasca => {
        setTasques([...tasques, tasca]);
    };
    return (
        <div>
            <FormulariTasques afegirTasca={afegirTasca} />
            <Tasca tasques={tasques} setTasques={setTasques} />
        </div>
    )
}

export default LlistatTasques