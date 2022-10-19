/* ANIMAÇÃO CONFORME FOR DANDO SCROLL */
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    navbar-nav,
    #baixo,
    .image-main,
    .group-cities
`);

let clkCity = document.querySelectorAll("section.container-cities div.container-inside div.container-city");
clkCity.forEach(e => {
    e.addEventListener("mouseenter", () => {
        e.classList.add("active");
    })

    e.addEventListener("mouseout", () => {
        e.classList.remove("active");
    })
});