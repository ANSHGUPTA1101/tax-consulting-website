export const hamburger = ()=> {
    document.addEventListener("DOMContentLoaded", ()=> {
        const navMenu = document.querySelector(".nav-menu")
        const hamburgerBtn = document.querySelector("#hamburger-btn")
         hamburgerBtn.addEventListener("click", ()=> {
            navMenu.classList.toggle("active")
            hamburgerBtn.textContent = navMenu.classList.contains("active") ?  "✖" : "☰";
         })
    })
}