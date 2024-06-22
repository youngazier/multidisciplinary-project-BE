import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUo_1GSIxBDVQZRMIrwRIqtLIVx9E8NU",
  authDomain: "multidisciplinary-project-be.firebaseapp.com",
  projectId: "multidisciplinary-project-be",
  storageBucket: "multidisciplinary-project-be.appspot.com",
  messagingSenderId: "655958428923",
  appId: "1:655958428923:web:f511978bb9a6d481a0345e",
  measurementId: "G-Q1P4FJNEK2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App);

app.use(router)

app.mount("#app")