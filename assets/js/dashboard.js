const sidebar =
document.querySelector(".sidebar");

const menuToggle =
document.querySelector(".menu-toggle");

const overlay =
document.querySelector(".sidebar-overlay");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

        overlay.classList.toggle("active");

    });

}

if(overlay){

    overlay.addEventListener("click",()=>{

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

    });

}

const user =
JSON.parse(
localStorage.getItem(
"loggedInUser"
));

if(user){

    document.getElementById(
    "userName"
    ).textContent =
    user.name;

    document.getElementById(
    "userRole"
    ).textContent =
    user.role;
}

function animateCounters(){

    const counters =
    document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
        Number(counter.dataset.target);

        let current = 0;

        const increment =
        Math.ceil(target / 50);

        const update = () => {

            current += increment;

            if(current < target){

                counter.textContent =
                current;

                requestAnimationFrame(update);
            }

            else{

                counter.textContent =
                target;
            }

        };

        update();

    });

}

window.addEventListener(
"load",
animateCounters
);

function animateCounters(){

    const counters =
    document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
        Number(counter.dataset.target);

        let current = 0;

        const increment =
        Math.ceil(target / 50);

        const update = () => {

            current += increment;

            if(current < target){

                counter.textContent =
                current;

                requestAnimationFrame(update);
            }

            else{

                counter.textContent =
                target;
            }

        };

        update();

    });

}

window.addEventListener(
"load",
animateCounters
);

const chartCanvas =
document.getElementById(
"ordersChart"
);

if(chartCanvas){

    new Chart(chartCanvas,{

        type:"line",

        data:{

            labels:[

                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"

            ],

            datasets:[{

                label:"Orders",

                data:[

                    8,
                    12,
                    10,
                    18,
                    22,
                    24

                ],

                borderColor:"#FF6B35",

                backgroundColor:
                "rgba(255,107,53,.1)",

                fill:true,

                tension:.4

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    display:false
                }

            }

        }

    });

}

const menuItems =
document.querySelectorAll(
".menu-item"
);

const pages = {

    dashboard:
    document.getElementById(
    "dashboardPage"
    ),

    orders:
    document.getElementById(
    "ordersPage"
    ),

    rewards:
    document.getElementById(
    "rewardsPage"
    ),

    settings:
    document.getElementById(
    "settingsPage"
    )

};

menuItems.forEach(item => {

    item.addEventListener(
    "click", () => {

        menuItems.forEach(menu => {

            menu.classList.remove(
            "active"
            );

        });

        item.classList.add(
        "active"
        );

        Object.values(pages)
        .forEach(page => {

            page.classList.remove(
            "active-page"
            );

        });

        pages[
            item.dataset.page
        ].classList.add(
        "active-page"
        );

    });

});