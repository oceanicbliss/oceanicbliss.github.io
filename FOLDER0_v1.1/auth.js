const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      // Get user input values
      const email = loginForm.email.value;
      const password = loginForm.password.value;
      // Send credentials to an external service for validation
      // ...
      
      if (email === "leongpengjun@hotmail.com") {
      var emailcheck = "1"
    } else {
      var emailcheck = "0"
    }  
    
      if (password === "123") {
      var passwordcheck = "1"
    } else {
      var passwordcheck = "0"
    }
    
      if (emailcheck === "1" && passwordcheck === "1") {
      var allcheck = true;
    } else {
      var allcheck = false;
    }
    
      if (allcheck === true) {
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
        
      } else {
        document.write("access denied");
        setTimeout(denied, 1000);
        function denied() {
        window.location.href = 'index.html';
        }
      }
    
    });