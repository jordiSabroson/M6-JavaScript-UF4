import React, {useState} from 'react'

const FormulariTasques = props => {
    const { handleAddItem } = props;
    const [descripcio, setDescripcio] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            descripcio
        });
        setDescripcio("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='todo-list'>
                <div className='input'>
                    <input
                        type='text'
                        className='text'
                        value={descripcio}
                        onChange={e => setDescripcio(e.target.value)}
                    />
                    <button
                        className='button green'
                        disabled={descripcio ? "" : "disabled"}
                    >
                        Afegir
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormulariTasques