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
"revenueChart"
);

if(chartCanvas){

    new Chart(chartCanvas,{

        type:"line",

        data:{

            labels:[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets:[{

                label:"Orders",

            data:[
                12500,
                14800,
                13200,
                17600,
                22400,
                28100,
                25400
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

    menu:
    document.getElementById(
    "menuPage"
    ),

    analytics:
    document.getElementById(
    "analyticsPage"
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

const analyticsChart =
document.getElementById(
"analyticsChart"
);

if(analyticsChart){

    new Chart(analyticsChart,{

        type:"bar",

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

                label:"Revenue",

                data:[
                    65000,
                    82000,
                    74000,
                    98000,
                    110000,
                    125000
                ],

                backgroundColor:"#FF6B35",

                borderRadius:10

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