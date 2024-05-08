import React from 'react';
import Welcome from '../components/Welcome';

const Home = () => {
    return (
        <div>
            <h1>Pàgina d'inici</h1>
            {/* Utilitza el component Welcome passant el nom d'usuari */}
            <Welcome username="usuari" />
            {/* Contingut addicional de la pàgina d'inici */}
        </div>
    );
};

export default Home;