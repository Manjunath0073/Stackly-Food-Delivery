const copyButtons =
document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const code =
        button.dataset.code;

        navigator.clipboard.writeText(code);

        button.textContent = "Copied!";

        setTimeout(() => {

            button.textContent =
            "Copy Code";

        }, 2000);

    });

});

const endTime =
new Date().getTime() +
(2 * 60 * 60 * 1000);

setInterval(() => {

    const now =
    new Date().getTime();

    const distance =
    endTime - now;

    const hours =
    Math.floor(
    (distance %
    (1000 * 60 * 60 * 24))
    /
    (1000 * 60 * 60));

    const minutes =
    Math.floor(
    (distance %
    (1000 * 60 * 60))
    /
    (1000 * 60));

    const seconds =
    Math.floor(
    (distance %
    (1000 * 60))
    /
    1000);

    document.getElementById("hours")
    .textContent =
    String(hours).padStart(2,'0');

    document.getElementById("minutes")
    .textContent =
    String(minutes).padStart(2,'0');

    document.getElementById("seconds")
    .textContent =
    String(seconds).padStart(2,'0');

},1000);

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});