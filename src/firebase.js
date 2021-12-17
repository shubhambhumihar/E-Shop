import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBV_PutWGE10Iov36BlNP3QbhWD1kar2DQ",
  authDomain: "shop-clone-6f81c.firebaseapp.com",
  projectId: "shop-clone-6f81c",
  storageBucket: "shop-clone-6f81c.appspot.com",
  messagingSenderId: "476169507120",
  appId: "1:476169507120:web:24285234f5786eda4978f5",
};

// initaisllize app
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();
// const auth = auth();

export { auth };
export default db;
