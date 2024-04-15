import React, { useState } from 'react'

const FormulariTasques = ({ funcAfegirTasca }) => {

    const [textTasca, setTextTasca] = useState('');

    const enviarForm = e => {
        e.preventDefault();
        if (!textTasca.trim()) return;
        const tascaNova = {
            id: Date.now(),
            text: textTasca,
            completada: false
        };
        funcAfegirTasca(tascaNova);
        setTextTasca('');
    };

    const canviTextTasca = e => {
        setTextTasca(e.target.value);
    }
    return (
        <form onSubmit={enviarForm}>
            <input type="text" value={textTasca} onChange={canviTextTasca} />
            <button type="submit"> Afegir tasca </button>
        </form>
    );
};

export default FormulariTasques