import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default AuthService;
