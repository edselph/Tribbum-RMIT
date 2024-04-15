// configureFirestore.js
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

export const configureFirestore = (app) => {
    const db = getFirestore(app);
    if (window.location.hostname === 'localhost') {
        connectFirestoreEmulator(db, 'localhost', 8080);
    }
    return db;
};
