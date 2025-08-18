import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

<script>
  // Tus credenciales (cópialas de Firebase Console)
  const firebaseConfig = {
    apiKey: "AIzaSyBKIO3jMZt3x33ozUz_DxWmNSIfCIKLcN0",
    authDomain: "kusa-973b2.firebaseapp.com",
    projectId: "kusa-973b2",
    storageBucket: "kusa-973b2.appspot.com",
    messagingSenderId: "639782506838",
    appId: "1:639782506838:web:a8f8534421136547d906f7"
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Obtén las instancias de Firestore y Storage
  const db = firebase.firestore();
  const storage = firebase.storage();

  console.log("¡Firebase está listo! 🚀"); // Verifica en la consola
</script>
