import app from "@/firebase/init.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
//addDoc creates an auto ID
//setDoc requires an ID

const db = getFirestore(app);
//CREATE
export async function addUser(user) {
  const dataToAdd = await addDoc(collection(db, "users"), { user });
  console.log("Document written with ID: ", dataToAdd.id);
}
export async function setUser(id, user) {
  const dataToSet = await setDoc(doc(db, "users", id), user);
  console.log("Document written with ID: ", dataToSet.id);
}

//READ

export const getUserData = new Promise((resolve, reject) => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const dataByEmail = await getUserByEmail(auth.currentUser.email);
      if (dataByEmail) {
        resolve({ result: true, resultData: dataByEmail });
      } else {
        reject({ result: false, resultData: null });
      }
    }
  });
});

export async function getAllUsers() {
  const dataToGet = await getDocs(collection(db, "users"));
  return dataToGet.docs.map((doc) => doc.data());
}

export async function getUserById(id) {
  const dataToGet = doc(db, "users", id);
  const dataSnap = await getDoc(dataToGet);
  if (dataSnap.exists()) {
    return dataSnap.data();
  } else {
    console.log(dataSnap);
    // dataSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
export async function getUserByEmail(email) {
  let user;
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.data());
    user = doc.data();
  });
  if (user) {
    return { result: true, data: user };
  } else {
    return { result: false, data: null };
  }
}

export async function searchUserByName(name) {
  const dataToGet = await getDocs(
    query(collection(db, "users"), where("name", "==", name))
  );
  return dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
//UPDATE
export async function updateUser(id, data) {
  //data is an object with the structure identical to the collection
  const dataToUpdate = doc(db, "users", id);
  await updateDoc(dataToUpdate, { data });
}
//DELETE
export async function deleteUser(id) {
  //delete a document based on its collection and its id
  const dataToDelete = doc(db, "users", id);
  await deleteDoc(dataToDelete);
}
