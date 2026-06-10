const signupForm =
document.getElementById("signupForm");

const authMessage =
document.querySelector(".auth-message");

signupForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById(
    "signupName").value.trim();

    const email =
    document.getElementById(
    "signupEmail").value.trim();

    const role =
    document.getElementById(
    "signupRole").value;

    const password =
    document.getElementById(
    "signupPassword").value;

    const confirmPassword =
    document.getElementById(
    "confirmPassword").value;

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(name.length < 3){

        showError(
        "Name must be at least 3 characters");

        return;
    }

    if(!email.includes("@")){

        showError(
        "Enter valid email");

        return;
    }

    if(role === ""){

        showError(
        "Please select role");

        return;
    }

    if(!passwordRegex.test(password)){

        showError(
        "Password must contain 8 chars, uppercase, lowercase and number");

        return;
    }

    if(password !== confirmPassword){

        showError(
        "Passwords do not match");

        return;
    }

    const user = {

        name,
        email,
        role,
        password

    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    authMessage.style.color =
    "#16A34A";

    authMessage.textContent =
    "Account created successfully";

    setTimeout(()=>{

        window.location.href =
        "login.html";

    },1500);

});

function showError(message){

    authMessage.style.color =
    "#DC2626";

    authMessage.textContent =
    message;

}