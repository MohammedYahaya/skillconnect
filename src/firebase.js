import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBokBHLM71GeDgH12rpel2hGOry_orhbIc",
  authDomain: "skillconnect-826cd.firebaseapp.com",
  projectId: "skillconnect-826cd",
  storageBucket: "skillconnect-826cd.firebasestorage.app",
  messagingSenderId: "980652003582",
  appId: "1:980652003582:web:342ef8f18b4f4f5b30d5af",
  measurementId: "G-VYYBZ25HL4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
