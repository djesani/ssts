import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCNCFjCCNlEhTmMjvokNanoh12pN7OwTU",
    authDomain: "popkorn-18f8b.firebaseapp.com",
    databaseURL: "https://popkorn-18f8b.firebaseio.com",
    projectId: "popkorn-18f8b",
    storageBucket: "popkorn-18f8b.appspot.com",
    messagingSenderId: "762845453825",
    appId: "1:762845453825:web:691639682a78a29e646a00",
    measurementId: "G-LFHQG844KS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers() {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map((doc) => doc.data());
    console.log('usersList', usersList)
    return usersList;
}

getUsers();