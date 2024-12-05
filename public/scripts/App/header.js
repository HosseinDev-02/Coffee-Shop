
window.addEventListener("load", () => {
    const menuItems = document.querySelectorAll(".menu__item")
    const mobileMenuBtn = document.querySelector("#mobile-menu__btn")
    const mobileMenu = document.querySelector("#mobile-menu")
    const subMenuBtn = document.querySelector("#sub-menu__btn")
    const subMenu = document.querySelector(".sub-menu")
    const mobilMenuItems = document.querySelectorAll(".mobile-menu__item")


    mobilMenuItems.forEach(item => {
        item.addEventListener("click", () => {
            if (!item.className.includes("flex-col")) {
                document.querySelector(".mobile-menu__item--active").classList.remove("mobile-menu__item--active")
                item.classList.add("mobile-menu__item--active")
            }
        })
    })
    subMenuBtn.addEventListener("click", () => {
        subMenu.classList.toggle("sub-menu--hidden")
        subMenuBtn.classList.toggle("text-indigo-400")
    })
    mobileMenuBtn.addEventListener("click", () => {
        if (mobileMenu.className.includes("mobile-menu--hidden")) {
            mobileMenu.classList.remove("mobile-menu--hidden")
        } else {
            mobileMenu.classList.add("mobile-menu--hidden")
            subMenu.classList.add("sub-menu--hidden")
            subMenuBtn.classList.remove("text-indigo-400")
        }
    })
})

