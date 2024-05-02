// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
<<<<<<< Updated upstream
import { connectStorageEmulator, getStorage } from "firebase/storage";
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { connectStorageEmulator, getStorage } from "firebase/storage";
>>>>>>> fcb35e205345d069d3a0c413ccb93a4cdb9d2b60
=======
import { connectStorageEmulator, getStorage } from "firebase/storage";
>>>>>>> 92204dfd913a2c855d40c941b8a51efb051042a7
>>>>>>> Stashed changes

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "development",
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
const storage = getStorage(app);

// Connect to Firestore Emulator in development
if (process.env.NODE_ENV === "development") {
<<<<<<< Updated upstream
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
=======
<<<<<<< HEAD
<<<<<<< HEAD
  connectFirestoreEmulator(db, "localhost", 8080);
=======
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
>>>>>>> fcb35e205345d069d3a0c413ccb93a4cdb9d2b60
=======
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectStorageEmulator(storage, "127.0.0.1", 9199);
>>>>>>> 92204dfd913a2c855d40c941b8a51efb051042a7
>>>>>>> Stashed changes
}

export default app;
