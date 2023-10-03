let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let submitBtn = document.querySelector('button[type="submit"]');
let errorOutput = document.querySelector(".error-output");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!validatePasswords()) {
        errorOutput.textContent = "* Passwords do not match";
        password.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        errorOutput.textContent = "";
        password.classList.remove("error")
        confirmPassword.classList.remove("error");
    }
});

function validatePasswords() {
    return password.value === confirmPassword.value;
}