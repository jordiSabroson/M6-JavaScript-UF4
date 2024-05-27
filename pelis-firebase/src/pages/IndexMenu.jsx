// src/pages/IndexMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const IndexMenu = () => {
    return (
        <div>
            <Card>
                <Link to="/movies/list">Llistat de pel·lícules</Link>
            </Card>
            <Card>
                <Link to="/movies/add">Afegir pel·lícula</Link>
            </Card>
        </div>
    );
};

export default IndexMenu;
