var firebaseConfig = {
  apiKey: "AIzaSyBnQ1m4oDe-d6073keisceDV7_xLDuQZTE",
  authDomain: "digital-solution-proj1.firebaseapp.com",
  databaseURL: "https://digital-solution-proj1.firebaseio.com",
  projectId: "digital-solution-proj1",
  storageBucket: "digital-solution-proj1.appspot.com",
  messagingSenderId: "991362374315",
  appId: "1:991362374315:web:eb2df9260e6203a66575ee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const registerButton = document.querySelector(".register_button");
const loginButton = document.querySelector(".login_button");
const txtName = document.getElementById("name");
const txtEmail1 = document.getElementById("email1");
const txtPassword1 = document.getElementById("password1");
const txtComfirmPassword = document.getElementById("comfirm password");
const txtEmail2 = document.getElementById("email2");
const txtPassword2 = document.getElementById("password2");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = txtName.value;
  const email = txtEmail1.value;
  const password = txtPassword1.value;
  const comfirmPassword = txtComfirmPassword.value;

  auth.createUserWithEmailAndPassword(email, password).catch((err) => {
    let errorMessage = err.message;
    console.log(errorMessage);
  });
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = txtEmail2.value;
  console.log(email);
  const password = txtPassword2.value;

  auth.signInUserWithEmailAndPassword(email, password).catch((err) => {
    console.log(err.message);
  });
});

auth.onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log("user logged in");
    window.location.href = "/home.html";
  } else {
    console.log("user not logged in");
  }
});
