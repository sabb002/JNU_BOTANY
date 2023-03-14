import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjQvk4yNx4BipKhp2dzcWWgsG4SJB2DL4",
  authDomain: "questionbankbotany.firebaseapp.com",
  projectId: "questionbankbotany",
  storageBucket: "questionbankbotany.appspot.com",
  messagingSenderId: "752456590298",
  appId: "1:752456590298:web:9aa92675142361512116e3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
