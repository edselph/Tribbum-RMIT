import app from '@/firebase/init';
import {
    getFirestore,
    collection,
    addDoc,
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
export async function createPostOrComment(data, collectionName = "posts") {
    try {
        const ref = await addDoc(collection(db, collectionName), data);
        console.log(collectionName.slice(0, -1) + " created with ID:", ref.id);
        return ref.id;
    } catch (error) {
        console.error("Error creating " + collectionName.slice(0, -1) + ":", error);
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

// // Specific function to add a comment to a post
// export async function addCommentToPost(postId, commentData) {
//     try {
//         const commentId = await createPostOrComment(commentData, "posts"); // Assuming comments are stored in the same collection
//         await updatePostOrComment(postId, { commentIds: arrayUnion(commentId) }, "posts");
//         console.log("Comment added to post with ID:", postId);
//     } catch (error) {
//         console.error("Error adding comment to post:", error);
//     }
// }




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
