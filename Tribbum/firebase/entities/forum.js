import app from "@/firebase/init.js";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  getDoc,
  where,
  query,
  orderBy,
  startAt,
  endAt,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { uploadFileWithDownloadURL } from "../uploadFileWithDownloadURL";
//addDoc creates an auto ID
//setDoc requires an ID

const db = getFirestore(app);

const SORT_ORDER = {
  DESC: "desc",
  ASC: "asc",
};

//Get all forums by userID
export async function getAllForums(
  sortBy = "name",
  sortOrder = SORT_ORDER.ASC
) {
  const dataToGet = await getDocs(
    query(collection(db, "groups"), orderBy(sortBy, sortOrder))
  );
  return dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getForumById(id) {
  const dataToGet = await getDoc(doc(db, "groups", id));
  return { ...dataToGet.data(), id };
}

export async function searchForumByName(name) {
  const dataToGet = await getDocs(
    query(collection(db, "groups"), where("name", "==", name))
  );
  return dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function findForumByAlphabeticalLetter(alphabeticalBetter) {
  const dataToGet = await getDocs(
    query(
      collection(db, "groups"),
      orderBy("name"),
      startAt(alphabeticalBetter.toUpperCase()),
      endAt(alphabeticalBetter.toUpperCase() + "\uf8ff")
    )
  );
  return dataToGet.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

//Create forums
export async function createForums({ forumImage, forumName, forumMembers }) {
  const forumImageURL = await uploadFileWithDownloadURL(
    forumImage,
    `forums/${forumName}`
  );
  let forumData = {
    bannerUrl: forumImageURL,
    name: forumName,
    postIds: [],
    userIds: [],
  };
  const dataToAdd = await addDoc(collection(db, "groups"), forumData);
  if (Array.isArray(forumMembers) && forumMembers.length > 0) {
    const statuses = await Promise.all(
      forumMembers.map((userId) =>
        addMember({ forumId: dataToAdd.id, memberId: userId })
      )
    );
    if (statuses.some((status) => !status)) {
      await deleteForum(dataToAdd.id);
      throw new Error("Members do not exist");
    }
  }
  console.log("Document written with ID: ", dataToAdd.id);
}

//Update forum
/*
  forum is an object with groupName, groupImage fields
*/
export async function updateForum({ id, forum }) {
  // if there is an image (from input type 'file'), upload to firebase storage before updating the database
  let newForumData = {
    ...forum,
  };
  if (forum.hasOwnProperty("bannerUrl")) {
    const newForumImageURL = await uploadFileWithDownloadURL(
      forum.bannerUrl,
      `forums/${forum.groupName}`
    );
    newForumData = { ...newForumData, bannerUrl: newForumImageURL };
  }
  const docRef = doc(db, "groups", id);
  try {
    await updateDoc(docRef, newForumData);
    console.log("Document editted with ID: ", id);
    return true;
  } catch (e) {
    console.log("Fail to edit document with ID: ", id);
    return false;
  }
}

export async function addMember({ forumId, memberId }) {
  try {
    await updateDoc(doc(db, "groups", forumId), {
      userIds: arrayUnion(memberId),
    });
    console.log("Added Member ID: ", memberId);
    return true;
  } catch (e) {
    console.log("Failed to add member ID: ", memberId);
    console.log("e", e);
    return false;
  }
}
export async function removeMember({ forumId, memberId }) {
  try {
    await updateDoc(doc(db, "groups", forumId), {
      userIds: arrayRemove(memberId),
    });
    console.log("Removed Member ID: ", memberId);
    return true;
  } catch (e) {
    console.log("Failed to remove member ID: ", memberId);
    console.log(e);
    return false;
  }
}

export async function addPost({ forumId, postId }) {
  try {
    await updateDoc(doc(db, "groups", forumId), {
      postIds: arrayUnion(postId),
    });
    console.log("Added Post ID: ", postId);
    return true;
  } catch (e) {
    console.log("Failed to add Post ID: ", postId);
    return false;
  }
}
export async function removePost({ forumId, postId }) {
  try {
    await updateDoc(doc(db, "groups", forumId), {
      postIds: arrayRemove(postId),
    });
    console.log("Removed Post ID: ", postId);
    return true;
  } catch (e) {
    console.log("Failed to remove post ID: ", postId);
    console.log("e", e);
    return false;
  }
}

//Delete forum
export async function deleteForum(id) {
  //delete a document based on its collection and its id
  const dataToDelete = doc(db, "groups", id);
  await deleteDoc(dataToDelete);
}
