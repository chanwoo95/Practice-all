import { firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseAuth.signInWithPopup(provider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
