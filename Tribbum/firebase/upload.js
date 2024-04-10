import { getStorage, ref, uploadBytes } from "firebase/storage";

// 'file' comes from the Blob or File API
export const uploadFile = async (file, fileName) => {
    const storage = getStorage();
    const storageRef = ref(storage, fileName);

    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log('snapshot', snapshot);
    });
}