import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWyBu7PBWPxtp8ITX74GJjgWih8AwmFbU",
  authDomain: "login1-daaf1.firebaseapp.com",
  projectId: "login1-daaf1",
  storageBucket: "login1-daaf1.appspot.com",
  messagingSenderId: "305938861172",
  appId: "1:305938861172:web:089bac589094104d21d521",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
