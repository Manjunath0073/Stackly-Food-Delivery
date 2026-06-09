const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.dataset.target;

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(
            current + increment
            );

            setTimeout(
            updateCounter,
            20
            );

        }else{

            counter.innerText =
            target;
        }
    };

    updateCounter();
});

/* ======================
   OFFER COUNTDOWN TIMER
====================== */

const targetDate = new Date();

// 3 days from now
targetDate.setDate(targetDate.getDate() + 3);

function updateOfferTimer() {

    const now = new Date().getTime();

    const distance =
    targetDate.getTime() - now;

    if (distance <= 0) {

        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateOfferTimer();

setInterval(
    updateOfferTimer,
    1000
);
/* ======================
   COPY COUPON
====================== */

const coupon =
document.getElementById("couponCode");

if(coupon){

    coupon.addEventListener("click", () => {

        navigator.clipboard.writeText(
            coupon.textContent.trim()
        );

        coupon.textContent =
        "COPIED ✓";

        setTimeout(() => {

            coupon.textContent =
            "STACK50";

        }, 2000);

    });

}
/* ======================
   FAVOURITE BUTTON
====================== */

const favouriteButtons =
document.querySelectorAll(
    ".dish-favourite, .favorite-btn"
);

favouriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon =
        button.querySelector("i");

        icon.classList.toggle(
            "fa-regular"
        );

        icon.classList.toggle(
            "fa-solid"
        );

        button.classList.toggle(
            "active"
        );

    });

});
/* ======================
   FILTER BUTTONS
====================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});