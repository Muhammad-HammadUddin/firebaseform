
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCYBZ6ASmJrjwaBMKaA0TgYUOwnGeG3z9A",
    authDomain: "third-project-5f7f8.firebaseapp.com",
    projectId: "third-project-5f7f8",
    storageBucket: "third-project-5f7f8.appspot.com",
    messagingSenderId: "179226223064",
    appId: "1:179226223064:web:a049456b0f8ad45e27d2ad",
    measurementId: "G-VWXHWWNRQ4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const logoutbutton=document.querySelector('.logout_button');
const logoutcontainer=document.querySelector('.logoutcontainer')
const maincontainer=document.querySelector('.main-container')
const signup_hello = document.querySelector('.signup-hello');
const hellomsg = document.querySelector('.hello-msg');
const signincontainer = document.querySelector('.signin-container');
const signupcontainer = document.querySelector('.signup-container');
const signupbutton = document.querySelector('.signup_button');
const signinbutton = document.querySelector('.signin_button');
const signupemail = document.querySelector('#signup_email'); // Use ID selector for input
const signinemail = document.querySelector('#signin_email'); // Use ID selector for input
const signuppassword = document.querySelector('#signup_password'); // Use ID selector for input
const signinpassword = document.querySelector('#signin_password'); // Use ID selector for input

signup_hello.addEventListener('click', function(e) {
  
  
  // Hide hello message
  hellomsg.style.display = 'none';
  
  // Show signup container and hide signin container
  signupcontainer.style.display = 'flex';
  signincontainer.style.display = 'none';
});
function signupnewuser(){


   

  createUserWithEmailAndPassword(auth, signupemail.value, signuppassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("successfully signed");
    // ...
  })
  .catch((error) => {
    alert("Try Again");
    // ..
  });
  
  hellomsg.style.display = 'flex';
  
  // Show signup container and hide signin container
  
  signincontainer.style.display = 'flex';
  signupcontainer.style.display = 'none';


}

function signinuser(){
  signInWithEmailAndPassword(auth, signinemail.value, signinpassword.value)
  .then((userCredential) => {
    
    const user = userCredential.user;

    alert("successfully signed in");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Password does not match");
  });
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    maincontainer.style.display='none';
    logoutcontainer.style.display='flex';


    // ...
  } else {
    
    
    
  }
});





function logoutuser(){
  
signOut(auth).then(() => {
   alert("signed out successfully");
   maincontainer.style.display='flex';
   logoutcontainer.style.display='none';
  
}).catch((error) => {
  alert("Error");
});
}

signupbutton.addEventListener('click', signupnewuser);
signinbutton.addEventListener('click',signinuser);
logoutbutton.addEventListener('click',logoutuser)


