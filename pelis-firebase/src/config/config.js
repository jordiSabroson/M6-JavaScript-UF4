import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFs2g9R35GUuJvSqQk0qhOm4OeXtIq_MY",
    authDomain: "pelis-27047.firebaseapp.com",
    projectId: "pelis-27047",
    storageBucket: "pelis-27047.appspot.com",
    messagingSenderId: "938126329849",
    appId: "1:938126329849:web:ed25e5128e6158cf9cdf28"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };