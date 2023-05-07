import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //Your Firebase Config
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
