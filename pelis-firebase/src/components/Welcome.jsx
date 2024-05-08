import React from 'react';

const Welcome = ({ username }) => {
    return (
        <div>
            <h2>Hola, {username}!</h2>
            <p>Pel·lícules per a l'estiu</p>
        </div>
    );
};

export default Welcome;