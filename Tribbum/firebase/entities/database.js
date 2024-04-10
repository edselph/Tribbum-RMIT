import app from "@/firebase/init.js";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  query, where,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
//addDoc creates an auto ID
//setDoc requires an ID

const db = getFirestore(app);
//CREATE
export async function addData(entityName, data) {
  const dataToAdd = await addDoc(collection(db, entityName), { data });
  console.log("Document written with ID: ", dataToAdd.id);
}
export async function setData(entityName, id, data) {
  const dataToSet = await setDoc(doc(db, entityName, id), data);
  console.log("Document written with ID: ", dataToSet.id);
}

//READ
export async function getAllData(entityName) {
  const dataToGet = await getDocs(collection(db, entityName));
  return dataToGet.docs.map((doc) => doc.data());
};

export async function getDataById(entityName, id) {
  const dataToGet = doc(db, entityName, id);
  const dataSnap = await getDoc(dataToGet);
  if (dataSnap.exists()) {
    console.log("Document data:", dataSnap.data());
  } else {
    // dataSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
//UPDATE
export async function updateData(entityName, id, data) {
  //data is an object with the structure identical to the collection
  const dataToUpdate = doc(db, entityName, id);
  await updateDoc(dataToUpdate, { data });
};
//DELETE
export async function deleteData(entityName, id) {
  //delete a document based on its collection and its id
  const dataToDelete = doc(db, entityName, id);
  await deleteDoc(dataToDelete);
};

