import React from 'react';
import Card from '../components/Card';

const IndexMenu = () => {
    return (
        <div>
            <h1>Menú principal</h1>
            <div className="card-container">
                <Card
                    title="Anar al llistat de pel·lícules"
                    description="Fes clic aquí per veure la llista de pel·lícules."
                    link="/movies/list"
                />
                <Card
                    title="Afegir una pel·lícula"
                    description="Fes clic aquí per afegir una nova pel·lícula a la llista."
                    link="/movies/add"
                />
            </div>
        </div>
    );
};

export default IndexMenu;