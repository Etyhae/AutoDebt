document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute("href").substr(1);
            const element = document.getElementById(blockID);
            const offset = -50; // offset in pixels

            const y = element.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        });
    }
});
