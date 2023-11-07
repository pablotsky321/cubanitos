import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

export class firebaseConfig {

    firebaseConfig = {
        apiKey: "AIzaSyDL7xSIGsS538vrb6CAYxYcn-cwa5LlFy8",
        authDomain: "cubanitosauth.firebaseapp.com",
        databaseURL: "https://cubanitosauth-default-rtdb.firebaseio.com",
        projectId: "cubanitosauth",
        storageBucket: "cubanitosauth.appspot.com",
        messagingSenderId: "726569153516",
        appId: "1:726569153516:web:4d4b1ee1450668dfc586c9",
        measurementId: "G-MWQ2CK33Y4"
    };

    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
    db=getFirestore(this.app);
}