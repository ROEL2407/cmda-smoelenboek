const links = document.querySelectorAll(".teacherLink");
const closes = document.querySelectorAll(".close");
const pop_ups = document.querySelectorAll(".pop-up");
console.log(pop_ups);

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.remove("hidden");  
    })
})

closes.forEach(close => {
    close.addEventListener("click", function(event) {
        event.preventDefault();
        pop_ups.forEach(pop_up => {
                pop_up.classList.add("hidden");
        })
    })
})