import firebase from 'firebase/app';
import {GoogleAuthProvider} from 'firebase/auth';
import 'firebase/firestore';
import config from '../config/config';

const Firebase = firebase.initializeApp(config.firebase);

// export const Providers = {
//     google: new firebase.auth.GoogleAuthProvider()
// }

export const auth = new GoogleAuthProvider();
export default Firebase;