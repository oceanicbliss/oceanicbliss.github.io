//Add the Firebase and Cloud Firestore libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
//import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

//Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrSvAt9G_ued4Yqu4dPwNMJrgIsxGH95Y",
  authDomain: "oceanicbliss-c82af.firebaseapp.com",
  projectId: "oceanicbliss-c82af",
  storageBucket: "oceanicbliss-c82af.appspot.com",
  messagingSenderId: "837993391350",
  appId: "1:837993391350:web:db8710919a67f279f678d7",
  measurementId: "G-3XQD6S74X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Define a promise for dataString
const dataStringPromise = new Promise(async (resolve, reject) => {
  try {
      let dataString = "";

      const querySnapshot = await getDocs(collection(db, "url1"));
      querySnapshot.forEach((doc) => {
          const data = doc.data();
          Object.keys(data).forEach((key) => {
              dataString += `${data[key]}, `;
          });
          dataString += "\n";
      });

      //console.log(dataString);
      //window.alert(dataString);

      resolve(dataString);
  } catch (error) {
      console.error("Error fetching data:", error);
      reject(error);
  }
});

// Export the promise
export { dataStringPromise };