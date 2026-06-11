const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check for minimum message length
        if (message.length < 10) {
            formMessage.textContent = "Message must be at least 10 characters long.";
            formMessage.classList.remove("success");
            formMessage.classList.add("error");
            formMessage.style.display = "block";
            return;
        }

        // If valid, proceed with success handling (or submission logic)
        formMessage.textContent = "Message sent successfully!";
        formMessage.classList.remove("error");
        formMessage.classList.add("success");
        formMessage.style.display = "block";

        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);

        // You can add form submission logic here if needed
    });
}