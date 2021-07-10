const menuToggle = document.querySelector("a.menu-toggle")
const navLinks = document.getElementsByClassName("nav")[0]

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})