let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
  window.location.href = "./signin.html"
  //  signIn.classList.remove("active");
  //  signUp.classList.remove("inActive");
}

let regForm = document.querySelector(".signup")

regForm.addEventListener("submit", e => {
    e.preventDefault();

    let first_name = document.querySelector(".first_name").value;
    let last_name = document.querySelector(".last_name").value;
    let email_adress = document.querySelector(".email_adress").value;
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    
    console.log(first_name, last_name, email_adress, username, password);
    let details = {
    "first_name" :first_name,
    "last_name" :last_name,
    "email_address":email_adress,
    "username" :username,
    "password" :password 
    }

    console.log(details);

    registration(details)
  })

let logInForm = document.querySelector(".signin")

logInForm.addEventListener("submit", e => {
    e.preventDefault();

    let email_adress = document.querySelector(".email_adress").value;
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    
    console.log( email_adress, username, password);
    let loginDetails = {
    "email_address":email_adress,
    "username" :username ,
    "password" :password 
    }
    console.log(loginDetails)
    login(loginDetails)
  })


function registration(details){

  console.log(details);
   fetch("https://fathomless-ravine-82823.herokuapp.com/user-registration/", {
    method: 'POST',
    body: JSON.stringify(details),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {console.log(json)

    })

   
  }
  function login(username,email_address,password){ 
     fetch("https://fathomless-ravine-82823.herokuapp.com/get-user-login/",{
       
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
 
     })
 
     .then((response) => response.json())
     .then((data) => {
 
       let users = data.data;
       let user_found = false;
       console.log(user_found)
 
       users.forEach((user) => {
         if (user.username == username && user.password == password) {
           user_found = true;
           localStorage.setItem("user", JSON.stringify(user));
           window.location.href = "";
           console.log(user_found);
         
       }});
       console.log(user_found);
       if (!user_found) {
         alert("User not found");
       }
  })}
 
 
  