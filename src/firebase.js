import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// import firebase from "firebase"



const firebaseConfig = {
  apiKey: "AIzaSyDs3-W0GJTqS7-hep2uodwNB028iQqRHfs",
  authDomain: "netflix-clone-30b84.firebaseapp.com",
  projectId: "netflix-clone-30b84",
  storageBucket: "netflix-clone-30b84.appspot.com",
  messagingSenderId: "83745386722",
  appId: "1:83745386722:web:1b426c9ca7b21c4ad2eebb"
  };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {auth}
// export default db;

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };
  