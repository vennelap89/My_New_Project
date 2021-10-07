let loginFormEl = document.getElementById("loginForm");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let logInEl = document.getElementById("logIn");

let errorMsg = "Required*";

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = errorMsg;
    } else {
        emailErrMsgEl.textContent = "";
    }
});
passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = errorMsg;
    } else {
        passwordErrMsgEl.textContent = "";
    }
});
loginFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});