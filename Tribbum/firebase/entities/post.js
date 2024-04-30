import { app } from "@/firebase/init";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc,
    getDocs,
} from "firebase/firestore";

const db = getFirestore(app);

// Function to create a new post
export async function createPost(data) {
    try {
        const postRef = await addDoc(collection(db, "posts"), data);
        console.log("Post created with ID:", postRef.id);
        return postRef.id;
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

// Function to update an existing post
export async function updatePost(postId, data) {
    try {
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, data);
        console.log("Post updated with ID:", postId);
    } catch (error) {
        console.error("Error updating post:", error);
    }
}

// Function to delete a post
export async function deletePost(postId) {
    try {
        const postRef = doc(db, "posts", postId);
        await deleteDoc(postRef);
        console.log("Post deleted with ID:", postId);
    } catch (error) {
        console.error("Error deleting post:", error);
    }
}

// Function to fetch a single post by ID
export async function getPostById(postId) {
    try {
        const postRef = doc(db, "posts", postId);
        const docSnap = await getDoc(postRef);
        if (docSnap.exists()) {
            console.log("Post data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such post found!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}

// Function to fetch all posts
export async function getAllPosts() {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
