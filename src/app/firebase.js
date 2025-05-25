// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Suas configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvDhYVfYSpCq6smjOaNAqcQ25JhJdmcys",
  authDomain: "kaielly-sousa-gatonautas.firebaseapp.com",
  projectId: "kaielly-sousa-gatonautas",
  storageBucket: "kaielly-sousa-gatonautas.appspot.com",
  messagingSenderId: "454017992443",
  appId: "1:454017992443:web:3a308aaccea36652d6125e",
  measurementId: "G-J5FX4L95JK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Banco de dados Firestore
const db = getFirestore(app);

export { db };
