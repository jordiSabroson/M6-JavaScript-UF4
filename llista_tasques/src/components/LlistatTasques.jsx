import React, { useState } from 'react'
import FormulariTasques from './FormulariTasques'
import Tasca from './Tasca'

const LlistatTasques = () => {
    const [tasques, setTasques] = useState([]);
    const [textTasca, setTextTasca] = useState('');

    const afegirTasca = tasca => {
        setTasques([...tasques, tasca]);
    };

    const eliminarTasca = id => {
        setTasques(tasques.filter((tasca) => tasca.id !== id));
    };

    const completarTasca = id => {
        const tasquesActuals = tasques.map(tasca => {
            if (tasca.id === id) {
                return { ...tasca, completada: !tasca.completada };
            }
            return tasca;
        });
        setTasques(tasquesActuals);
    };

    return (
        <>
            <h2>Llistat de tasques</h2>
            <FormulariTasques funcAfegirTasca={afegirTasca} />
            {tasques.map((tasca) => (
                <Tasca
                    key={tasca.id}
                    id={tasca.id}
                    text={tasca.text}
                    completada={tasca.completada}
                    completarTasca={completarTasca}
                    eliminarTasca={eliminarTasca}
                />
            ))}
        </>
    );
};

export default LlistatTasques