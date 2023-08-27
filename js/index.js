let navToggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".navbar");

navToggle.addEventListener("click", function() {
    let bars_contain = navToggle.firstElementChild.classList.contains("fa-bars");
    if (bars_contain) {
        navToggle.firstElementChild.classList.replace("fa-bars", "fa-times");
    } else {
        navToggle.firstElementChild.classList.replace("fa-times", "fa-bars");
    }
    sidebar.classList.toggle("show_navbar");
})