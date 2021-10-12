import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAZdQ2Hcxx_VPr_AFFtQEfTpFlzlAljjvU",
	authDomain: "clone-f3bdb.firebaseapp.com",
	projectId: "clone-f3bdb",
	storageBucket: "clone-f3bdb.appspot.com",
	messagingSenderId: "499627670039",
	appId: "1:499627670039:web:eff21fc211b5d7fd4d7a52",
	measurementId: "G-FQ9CRQ57ZM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
