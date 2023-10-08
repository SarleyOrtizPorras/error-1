import { getFirestore, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAT3mDiDthOveYWq2dr_wIx6BtjuL5Xjfk",
  authDomain: "ecommerce-94d90.firebaseapp.com",
  projectId: "ecommerce-94d90",
  storageBucket: "ecommerce-94d90.appspot.com",
  messagingSenderId: "790990907702",
  appId: "1:790990907702:web:a906c3c895b20fcdf1ab97"
};

const app = initializeApp(firebaseConfig);
export const querydb = getFirestore(app)