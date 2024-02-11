// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      // Get user input values
      const createemail = signupForm.createemail.value;
      const createpassword = signupForm.createpassword.value;

      
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);


////////////////////////////////////////////////////////////////////////////////////
///SIGN UP///

const auth = getAuth();
createUserWithEmailAndPassword(auth, createemail, createpassword)
.then((userCredential) => {
// Signed up 
const user = userCredential.user;
document.write("ACCOUNT CREATED")
setTimeout(accountcreated, 3000);
function accountcreated() {
  window.location.href = 'index.html';
}
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
// ..
});
})

