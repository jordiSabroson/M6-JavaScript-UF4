import React from 'react'
import { FaTrash } from 'react-icons/fa';

const Tasca = ({ id, text, completada, completarTasca, eliminarTasca }) => {
    const tascaClassName = completada ? 'tascaCompletada' : '';
    return (
        <div className={tascaClassName} onClick={() => completarTasca(id)}>
            <span>{text}</span>
            <button onClick={(e) => {e.stopPropagation(); eliminarTasca(id);}}>
                <FaTrash />
            </button>
        </div>
    );
};

export default Tasca