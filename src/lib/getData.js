// src/lib/getData.js
import firebase_app from './auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);

export default async function getDocument(collection, id) {
  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      result = docSnap.data();
    } else {
      console.error('No such document!');
    }
  } catch (e) {
    error = e;
    console.error('Error getting document:', error);
  }

  return { result, error };
}
