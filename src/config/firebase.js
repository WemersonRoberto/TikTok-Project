
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDP0mLs3qt_XfeDktOZLorqi9E-SeCF2og",
  authDomain: "tiktok---jornada-dev-eba-a201a.firebaseapp.com",
  projectId: "tiktok---jornada-dev-eba-a201a",
  storageBucket: "tiktok---jornada-dev-eba-a201a.appspot.com",
  messagingSenderId: "455987429694",
  appId: "1:455987429694:web:7c50c65f335b6ad362ec6f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;