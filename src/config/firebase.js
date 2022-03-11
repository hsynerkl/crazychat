import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQHjIF9niR1pcdzHu3ak8Ry0V6P9z5g_8",
    authDomain: "crazychat-6a44f.firebaseapp.com",
    projectId: "crazychat-6a44f",
    storageBucket: "crazychat-6a44f.appspot.com",
    messagingSenderId: "656472318553",
    appId: "1:656472318553:web:14d4bb6d4c98cf999c8748",
    measurementId: "G-2411CLSYZQ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateCurrentUser(auth, { displayName: name })
};

export const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}