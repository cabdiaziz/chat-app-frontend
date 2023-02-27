import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";

const provider = new GoogleAuthProvider();
let userToken = null;
const loginFirebase = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("user =", user);

      userToken = user.accessToken;
    })
    .catch((error) => {
      console.log("error:==", error);
    });
};
