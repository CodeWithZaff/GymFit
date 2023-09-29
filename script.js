const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) =>{
    text.classList.toggle("show-more");
    if(readMoreBtn.innerHTML === "Read More"){
        readMoreBtn.innerText = "Read More";
    }
    else{
        readMoreBtn.innerHTML = "Read Less";
    }
});
// JavaScript to handle scrolling effect
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("nav-scrolled");
    } else {
        navbar.classList.remove("nav-scrolled");
    }
});
