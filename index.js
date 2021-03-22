let menu = document.querySelector(".menu")
window.onscroll = () => {
    if (window.scrollY > 500) {
        menu.classList.add("menu_active")
    } else {
        menu.classList.remove("menu_active")
    }
}