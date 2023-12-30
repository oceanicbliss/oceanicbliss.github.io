// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";





const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      // Get user input values
      const email = loginForm.email.value;
      const password = loginForm.password.value;
      
      // Send credentials to an external service for validation
      // ...
   
      




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
///SIGNIN///

let authenticate = false;

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
authenticate = true;
//document.write(authenticate);
//////////////////////////////////////////////////////////////////////////////////////////
      // Respond to Firebase's Authentication
      if (authenticate === true) {
        const logoutLink = document.createElement('a');
        logoutLink.href = 'index.html';
        logoutLink.textContent = 'LOGOUT';
        logoutLink.style.position = 'fixed';
        logoutLink.style.top = '0px';
        logoutLink.style.right = '50px';
        document.body.appendChild(logoutLink);

        const title = document.createElement('b');
        title.textContent = 'Low Price Scanner';
        title.style.position = 'fixed';
        title.style.top = '50px';
        title.style.left = '5px';
        document.body.appendChild(title);
  
        const iframe = document.createElement('iframe');
        iframe.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkfdM0tANp3tURcIJnDdqqYnGB5OnAFIbvkFohs_YqMMK6jJH4fOuCGrfvoWZBlvl-ttEqelG6XwA8/pubhtml?widget=true&amp;headers=false';
        iframe.style.position = 'fixed';
        iframe.style.top = '100px';
        iframe.style.left = '5px';
        iframe.width = '1300';
        iframe.height = '500';
        document.body.appendChild(iframe);
      }
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
authenticate = false;
document.write("ACCESS DENIED");
setTimeout(denied, 1000);
function denied() {
  window.location.href = 'index.html';
}
});


});
