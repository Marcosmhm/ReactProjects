import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoLvXNUfez9-DbwNYoCdvRfG-mOZnZlWI",
  authDomain: "rent-wheels-266b1.firebaseapp.com",
  projectId: "rent-wheels-266b1",
  storageBucket: "rent-wheels-266b1.appspot.com",
  messagingSenderId: "898309477689",
  appId: "1:898309477689:web:505cae075350e6a07c04e8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();