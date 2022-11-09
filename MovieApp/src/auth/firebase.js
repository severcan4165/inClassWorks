import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {

  try {
    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, {displayName: displayName})
  
    navigate("/login")

  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (email, password, navigate) =>{
  try {
   await signInWithEmailAndPassword(auth, email, password)

    navigate("/")

  } catch (error) {
    console.log(error);
  }
}

export const userObserver = async (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });

    } else {
      setCurrentUser(false);
      console.log("user signed out");
    }
  });
}

export const logOut = () => {
  signOut(auth);
};

export const signUpWithGoogle = (navigate) =>{
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
}