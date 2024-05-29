import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'; 
import { database } from '../config/config'; 

const MoviesAdd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [director, setDirector] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const newMovie = {
                title,
                description,
                director,
                imageURL,
                rating: Number(rating), 
                year: Number(year), 
                duration: Number(duration), 
            };
            console.log(newMovie)
            await addDoc(collection(database, 'movies'), newMovie); 
            alert('Pel·lícula afegida amb èxit!');

            setTitle('');
            setDescription('');
            setDirector('');
            setImageURL('');
            setRating('');
            setYear('');
            setDuration('');
        } catch (error) {
            console.error('Error afegint pel·lícula:', error.message);
        }
    };

    return (
        <div>
            <h2>Afegir Pel·lícula</h2>
            <form onSubmit={handleSubmit}>
                <label>Títol:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Descripció:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                <label>Director:</label>
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
                <label>URL de la Imatge:</label>
                <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
                <label>Nota (1-5):</label>
                <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <label>Any:</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
                <label>Durada (min):</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                <button type="submit">Afegir Pel·lícula</button>
            </form>
        </div>
    );
};

export default MoviesAdd;