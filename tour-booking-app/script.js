document.addEventListener('DOMContentLoaded' , function () {

    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Booking confirmed for: "+ this.parentElement.textContent.trim());
        }); 
    });
});