// src/lib/getData.js
import firebase_app from './auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function getDocument(collection, id) {
  try {
    const docRef = doc(db, collection, id);
    console.log('Document reference:', docRef);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { result: docSnap.data(), error: null };
    } else {
      console.error('No such document!');
      return { result: null, error: 'No such document' };
    }
  } catch (error) {
    console.error('Error getting document:', error);
    return { result: null, error };
  }
}
