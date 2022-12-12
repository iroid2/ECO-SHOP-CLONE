const hiddenHam=document.querySelector(".ham-hidden-menu")

const hamIcon=document.querySelector(".ham-menu")
const overally=document.querySelector(".overally")

hamIcon.addEventListener(("click"),function(e){
   hiddenHam.classList.toggle("active")
})

