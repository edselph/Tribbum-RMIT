import app from '@/firebase/init';
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc,
    getDocs,
    arrayUnion,
    arrayRemove,
    query,
    orderBy,
    limit,
    startAfter,
    documentId,
    where
} from "firebase/firestore";

const db = getFirestore(app);

// Function to create a new post or comment
export async function createPostOrComment(data, collectionName = "posts", id = null) {
    try {
        let ref;
        if (id) {
            // Use the provided ID to create the document
            ref = doc(collection(db, collectionName), id);
            await setDoc(ref, data);
            console.log(`${collectionName.slice(0, -1)} created with provided ID:`, id);
        } else {
            // Let Firestore generate the ID
            ref = await addDoc(collection(db, collectionName), data);
            console.log(`${collectionName.slice(0, -1)} created with generated ID:`, ref.id);
        }
        return ref.id;
    } catch (error) {
        console.error(`Error creating ${collectionName.slice(0, -1)}:`, error);
    }
}

// Function to add post ID to the group's postIds array
export async function addPostToGroup(groupId, postId) {
    const groupRef = doc(db, "groups", groupId);
    try {
        await updateDoc(groupRef, {
            postIds: arrayUnion(postId)
        });
        console.log(`Group updated with new post ID:`, postId);
    } catch (error) {
        console.error(`Error updating group with new post ID:`, error);
        throw new Error(error);
    }
}



// ------------------------------------------------------------------------

// Function to add a comment ID to a post
export const addCommentToPost = async (postId, newCommentId) => {
    const postRef = doc(db, 'posts', postId);
    try {
        await updateDoc(postRef, {
            commentIds: arrayUnion(newCommentId)  // Correctly using arrayUnion from the imported Firestore functions
        });
        console.log("Comment ID added to post successfully");
    } catch (error) {
        console.error("Failed to add comment ID to post:", error);
        throw error;  // Re-throw to handle it in the component if necessary
    }
}
// ------------------------------------------------------------------------

// Toggles the like status of a user in the likedUserIds array of a post.
export async function toggleUserLike(id, userId) {
    const ref = doc(db, "posts", id); // Get a reference to the specific post document

    try {
        // Retrieve the current document to check the likedUserIds array
        const docSnapshot = await getDoc(ref);
        if (!docSnapshot.exists()) {
            throw new Error("Post not found");
        }

        const postData = docSnapshot.data();
        const likedUserIds = postData.likedUserIds || [];

        if (likedUserIds.includes(userId)) {
            // If userId is already in the array, remove it
            await updateDoc(ref, {
                likedUserIds: arrayRemove(userId)
            });
            console.log("User removed from likedUserIds successfully");
        } else {
            // If userId is not in the array, add it
            await updateDoc(ref, {
                likedUserIds: arrayUnion(userId)
            });
            console.log("User added to likedUserIds successfully");
        }
    } catch (error) {
        console.error("Failed to toggle user like status:", error);
        throw error;  // Rethrow to allow error handling in the calling context
    }
}

// ------------------------------------------------------------------------

// Function to update an existing post or comment
export async function updatePostOrComment(id, data, collectionName = "posts") {
    try {
        const ref = doc(db, collectionName, id);
        await updateDoc(ref, data);
        console.log(collectionName.slice(0, -1) + " updated with ID:", id);
    } catch (error) {
        console.error("Error updating " + collectionName.slice(0, -1) + ":", error);
    }
}

// Function to delete a post or comment
export async function deletePostOrComment(id, collectionName = "posts") {
    try {
        const ref = doc(db, collectionName, id);
        await deleteDoc(ref);
        console.log(collectionName.slice(0, -1) + " deleted with ID:", id);
    } catch (error) {
        console.error("Error deleting " + collectionName.slice(0, -1) + ":", error);
    }
}

// Function to fetch a single post or comment by ID
export async function getPostOrCommentById(id, collectionName = "posts") {
    try {
        const ref = doc(db, collectionName, id);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
            // console.log(collectionName.slice(0, -1) + " data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such " + collectionName.slice(0, -1) + " found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching " + collectionName.slice(0, -1) + ":", error);
    }
}

// Function to fetch all posts or comments
export async function getAllPostsOrComments(collectionName = "posts") {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching " + collectionName + "s:", error);
    }
}


// Function to fetch posts by groupId without any ordering or pagination
export async function fetchPostsByGroupId(groupId) {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("groupId", "==", groupId));

    try {
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return posts;
    } catch (error) {
        console.error("Error fetching posts by groupId:", error);
        return [];
    }
}
