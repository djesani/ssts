import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCl5o4Rr0YNBAfjsQbhfyBuhMkQk_N6zT0",
    authDomain: "kirtans-test.firebaseapp.com",
    projectId: "kirtans-test",
    storageBucket: "kirtans-test.appspot.com",
    messagingSenderId: "767492193333",
    appId: "1:767492193333:web:431a1dc9556d357166057c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}