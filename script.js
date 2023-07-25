const topLine = document.querySelector(".topline");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = topLine.getAttribute("data-visible");

    if (visibility === "false"){
        topLine.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        topLine.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});