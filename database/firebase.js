import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApa4f6O45mzcqxjO2z8iaMGCnICcMyT0I",
    authDomain: "mercaditodebolsillo-d46db.firebaseapp.com",
    projectId: "mercaditodebolsillo-d46db",
    storageBucket: "mercaditodebolsillo-d46db.appspot.com",
    messagingSenderId: "987833023430",
    appId: "1:987833023430:web:6da6140f44720e751250c7"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    app,
    db
};