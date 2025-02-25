 var typed = new Typed (".text", {
    strings: ["Frontend Developer", "Web Developer" , "video Editor" ],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop:true
})
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".mail");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const name = document.querySelector("input[name='name']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const description = document.querySelector("textarea[name='description']").value.trim();

        
        if (name === "" || email === "" || description === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

       
        alert("Message sent successfully!");
        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
  
    const projectLinks = document.querySelectorAll(".projects a");

    projectLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            const url = this.getAttribute("href");

            if (url && url !== "#") {
                window.open(url, "_blank"); 
            } else {
                alert("Project link is not available.");
            }
        });
    });
});

