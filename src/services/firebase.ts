import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiH5hHICr767HiWgs6cLr_IFd8KIrM08w",
  authDomain: "auth-exercise-85140.firebaseapp.com",
  projectId: "auth-exercise-85140",
  storageBucket: "auth-exercise-85140.appspot.com",
  messagingSenderId: "282536323228",
  appId: "1:282536323228:web:3145ac01f38d16fd136559"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);