
function Dark() {
    console.log("hh");
    document.body.classList.toggle('dark');
    document.getElementById("Home").classList.toggle("dark");
    document.getElementById("nav-bar").classList.toggle("dark");
  
    document.getElementById("Aboutme1").classList.toggle("dark");
    
    document.getElementById("qulifactions").classList.toggle("dark");
    document.getElementById("Testimonials").classList.toggle("dark");
    document.getElementById("media").classList.toggle("dark");
    
   
}

function Dark2() {
    document.body.classList.toggle('dark2');
    document.getElementById("nav-bar3").classList.toggle("dark2");
    document.getElementById("footer").classList.toggle("dark2");
    document.getElementById("media").classList.toggle("dark2");
}

function Dark3() {
    document.body.classList.toggle('dark3');
    document.getElementById("nav-bar4").classList.toggle("dark3");

    document.getElementById("media").classList.toggle("dark3");
    document.getElementById("services").classList.toggle("dark3");
    document.getElementById("mywork1").classList.toggle("dark3");
    document.getElementById("par").classList.toggle("dark3");
}
let submit = document.getElementById("send");
let email = document.getElementById("email");
let name1 = document.getElementById("UN");
let comment = document.getElementById("comment");
let form = document.getElementById("form");

form.addEventListener("submit", (e) =>{

    e.preventDefault();
   
    localStorage.setItem("email", email.value);
    localStorage.setItem("UN", name1.value);
    localStorage.setItem("comment", comment.value);
    window.alert("we will contact with you soon ")
    
});

