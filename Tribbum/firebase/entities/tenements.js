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
export async function addTenement(user) {
  const dataToAdd = await addDoc(collection(db, "tenements"), { user });
  console.log("Document written with ID: ", dataToAdd.id);
}
export async function setTenement(id, user) {
  const dataToSet = await setDoc(doc(db, "tenements", id), user);
  console.log("Document written with ID: ", dataToSet.id);
}

//READ
export async function getAllTenements() {
  const dataToGet = await getDocs(collection(db, "tenements"));
  return dataToGet.docs.map((doc) => doc.data());
};
export async function getTenementsByProvince(province) {
  let tenements = [];
  const q = query(collection(db, "tenements"), where("province", "==", province));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // console.log(doc.data());
    tenements.push(doc.data());
  });
  if (tenements) {
    return { result: true, data: tenements };
  } else { return { result: false, data: null } }

};
export const getAllProvinces = async () => {
  const tenements = await getAllTenements();
  const provinces = new Set(tenements.map((tenement) => { return tenement.province }));
}
export async function getTenementById(id) {
  const dataToGet = doc(db, "tenements", id);
  const dataSnap = await getDoc(dataToGet);
  if (dataSnap.exists()) {
    console.log("Document data:", dataSnap.data());
  } else {
    // dataSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
//UPDATE
export async function updateTenement(id, data) {
  //data is an object with the structure identical to the collection
  const dataToUpdate = doc(db, "tenements", id);
  await updateDoc(dataToUpdate, { data });
};
//DELETE
export async function deleteTenement(id) {
  //delete a document based on its collection and its id
  const dataToDelete = doc(db, "tenements", id);
  await deleteDoc(dataToDelete);
};

