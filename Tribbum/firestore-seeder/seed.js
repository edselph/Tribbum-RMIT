const admin = require('firebase-admin');
const fs = require('fs');

// Initialize Firestore with emulator settings
admin.initializeApp({
    projectId: 'development',
    credential: admin.credential.applicationDefault(),
});

admin.firestore().settings({
    host: 'localhost:8080',
    ssl: false,
});

const db = admin.firestore();

// Define the collection names and corresponding JSON file paths
const collections = {
    posts: './collections/posts.json',
    users: './collections/users.json',
    tenements: './collections/tenements.json',
    groups: './collections/groups.json',
    personalityTraits: './collections/personalityTraits.json',
    occupations: './collections/occupations.json',
    hobbies: './collections/hobbies.json',
    comments: './collections/comments.json'

    // aggregated: './collections/aggregated.json'
};

// Function to add data to Firestore
async function addDataToFirestore(collectionName, data) {
    const collectionRef = db.collection(collectionName);
    for (const doc of data) {
        await collectionRef.doc(doc.id).set(doc);
        console.log(`Document ${doc.id} added to collection ${collectionName}`);
    }
}

// Function to seed data for all collections
async function seedAllData() {
    try {
        for (const [collectionName, filePath] of Object.entries(collections)) {
            const seedData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            await addDataToFirestore(collectionName, seedData);
        }
        console.log('All data added successfully!');
    } catch (error) {
        console.error('Error adding data:', error);
    }
}

// Start seeding process
seedAllData();
