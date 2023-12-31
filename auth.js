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
// Call onLogin function after successful authentication
onLogin();
//document.write(authenticate);
//////////////////////////////////////////////////////////////////////////////////////////
      // Respond to Firebase's Authentication
      if (authenticate === true) {
        
        const title = document.createElement('b');
        title.textContent = 'LOGGING IN....';
        title.style.position = 'fixed';
        title.style.top = '120px';
        title.style.left = '50px';
        title.style.color = 'red';
        document.body.appendChild(title);
        // Set a timeout to remove the title after 5 seconds
        setTimeout(() => {
        document.body.removeChild(title);
        }, 5000);
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
  onLogout();
  window.location.href = 'index.html';
}
});


});



/////////////////////////////////////////////////////////////////////////////////////////////
//COOKIES///
////////////////////////////////////////////////////////////////////////////////////////////


        // Define the setCookie function
        function setCookie(name, value, days) {
          const expires = new Date();
          expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
          document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
      }

      // Define the getCookie function
      function getCookie(name) {
          const cookieArray = document.cookie.split(';');
          for (let i = 0; i < cookieArray.length; i++) {
              const cookie = cookieArray[i].trim();
              if (cookie.startsWith(name + '=')) {
                  return cookie.substring(name.length + 1);
              }
          }
          return null;
      }

      // Example: Set a cookie when the user logs in
      function onLogin() {
          setCookie('loggedIn', 'true', 7); // Expires in 7 days
      }

      // Example: Set a cookie when the user logs out
      function onLogout() {
          setCookie('loggedIn', 'false', 7); // Expires in 7 days
      }

      // Example: Check if the user is logged in
      function checkLoginStatus() {
          const loggedIn = getCookie('loggedIn');
          if (loggedIn === 'true') {
              window.alert("Logged In");
          } else {
              window.alert("Logged Out");
          }
          if (loggedIn === 'true') {
            const logoutLink = document.createElement('a');
            logoutLink.href = 'index.html';
            logoutLink.textContent = 'LOGOUT';
            logoutLink.style.position = 'fixed';
            logoutLink.style.top = '0px';
            logoutLink.style.right = '5px';
            // Add a click event listener to the logout link
            logoutLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link behavior
            // Call onLogout function when the link is clicked
            onLogout();
            // Additional logic for logging out, if needed
            // Redirect to the logout URL
            window.location.href = logoutLink.href;
            });
            document.body.appendChild(logoutLink);

            // Render the iframe only if the user is logged in
            const iframe = document.createElement('iframe');
            iframe.src = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQkfdM0tANp3tURcIJnDdqqYnGB5OnAFIbvkFohs_YqMMK6jJH4fOuCGrfvoWZBlvl-ttEqelG6XwA8/pubhtml?widget=true&amp;headers=false';
            iframe.style.position = 'fixed';
            iframe.style.top = '100px';
            iframe.style.left = '5px';
            iframe.width = '1300';
            iframe.height = '500';
            document.body.appendChild(iframe);
          }
      }

      
      
      //onLogin();
      //onLogout();
      checkLoginStatus();
  
      
      
