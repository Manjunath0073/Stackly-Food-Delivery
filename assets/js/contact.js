const contactForm =
document.querySelector(".contact-form");

const formMessage =
document.querySelector(".form-message");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    formMessage.classList.remove(
        "success",
        "error"
    );

    formMessage.classList.add(
        "success"
    );

    formMessage.textContent =
    "Message sent successfully!";

    formMessage.style.display =
    "block";

    setTimeout(() => {

        formMessage.style.display =
        "none";

    },3000);

});