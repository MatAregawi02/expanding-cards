//first, we bring the elements we need as variables
const panels = document.querySelectorAll(".panel");


panels.forEach(panel=> {
    
    panel.addEventListener("click", function(){
        panels.forEach(panel => {
            panel.classList.remove("active");
            panel.querySelector(".description").classList.remove("show");
        });
        panel.classList.add("active");
        panel.querySelector(".description").classList.add("show");
        // descriptions.style.Opacity = "1";
    });
});