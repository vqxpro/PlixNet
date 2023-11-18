let nav = document.getElementById("nav");
let ham = document.getElementById("ham");
let navLinks = document.getElementById("navlinks");
let links = document.getElementById("link");
let bar1 = document.getElementById("bar-1");
let bar2 = document.getElementById("bar-2");
let bar3 = document.getElementById("bar-3");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.width = "95%";
    nav.style.borderRadius = "50px";
    nav.style.marginTop = "10px";
    nav.style.border = "2px solid rgb(219, 132, 18)";
    nav.style.background = "rgb(78, 78, 78, .9)";
  } else {
    nav.style.width = "100%";
    nav.style.borderRadius = "0";
    nav.style.marginTop = "0";
    nav.style.border = "none";
    nav.style.background = "rgb(78, 78, 78)";
  }
};

ham.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("active");
    bar1.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
});

links.addEventListener("click", () => {
    navLinks.classList.remove("active");
    document.body.classList.remove("active");
    bar1.classList.remove("active");
    bar2.classList.remove("active");
    bar3.classList.remove("active");
});