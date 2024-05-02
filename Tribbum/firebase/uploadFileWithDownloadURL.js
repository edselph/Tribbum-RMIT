import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "./init";

// 'file' comes from the Blob or File API
// INFO: This function is an improvement for uploadFile function from the firebase/upload.js file
// Similarity: Upload file
// Difference: Return URL to save in Firestore
export const uploadFileWithDownloadURL = async (file, fileName) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, fileName);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Uploaded a blob or file!");
    console.log("snapshot", snapshot);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (e) {
    console.log(e);
    return null;
  }
};
