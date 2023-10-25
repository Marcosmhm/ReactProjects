import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider()

export const handleLogOut = () => {
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
    })
    .catch((error) => console.log(error));
};

export const handleSingIn = (e, email, password) => {
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const handleSingUp = (e, email, password) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const logInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
      console.log("Signed in with Google")
  }).catch((error) => {
      console.error(error.message)
  })
}

export const handleClickScroll = (e) => {
  const element = document.getElementById(e.target.classList.value);
  const offset = -70;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};