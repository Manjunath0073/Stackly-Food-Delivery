const loginForm =
document.getElementById("loginForm");

const authMessage =
document.querySelector(".auth-message");
if(loginForm){
loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    const role =
    document.getElementById("loginRole").value;

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!email.includes("@")){

        showError(
        "Enter valid email");

        return;
    }

    if(!passwordRegex.test(password)){

        showError(
        "Password must contain uppercase, lowercase, number and 8 characters");

        return;
    }

    if(role === ""){

        showError(
        "Please select role");

        return;
    }

    const user = {

        name: email.split("@")[0],

        email,

        role

    };

    localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
    );

    if(role === "customer"){

        window.location.href =
        "customer-dashboard.html";
    }

    else{

        window.location.href =
        "restaurant-dashboard.html";
    }

});
}

function showError(message){

    authMessage.style.color =
    "#DC2626";

    authMessage.textContent =
    message;

}

const counters =
document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        parseFloat(
        counter.dataset.target
        );

        const suffix =
        counter.dataset.suffix || "";

        let current = 0;

        const increment =
        target / 100;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                if(target % 1 !== 0){

                    counter.textContent =
                    current.toFixed(1) +
                    suffix;
                }

                else{

                    counter.textContent =
                    Math.floor(current) +
                    suffix;
                }

                requestAnimationFrame(
                updateCounter);
            }

            else{

                counter.textContent =
                target + suffix;
            }

        };

        updateCounter();

    });

};

const statsSection =
document.querySelector(".auth-stats");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter();

            observer.unobserve(
            statsSection);
        }

    });

},{threshold:.5});

observer.observe(
statsSection
);

const signupForm =
document.getElementById("signupForm");

if(signupForm){
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
}
