import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcFMHap9V0xEL6uoZf6RSt6utSCygE0xk",
  authDomain: "library-app-52dcf.firebaseapp.com",
  projectId: "library-app-52dcf",
  storageBucket: "library-app-52dcf.appspot.com",
  messagingSenderId: "498040655218",
  appId: "1:498040655218:web:d84df3bd1b41d95d1be1eb",
  measurementId: "G-MG3MJGDKQS",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

function SignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

function SignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.')
    })
    .catch((error) => {
      console.log(error)
    });
}

export { SignIn, SignOut, auth };
