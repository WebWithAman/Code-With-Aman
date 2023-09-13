/********************************************************
   Get Toggle Buttons And Nav
*********************************************************/
const mobileToggleBtns = document.querySelector(".mobile-toggle-buttons");
const nav = document.querySelector("nav");


/*********************************************************
  Add class Active to Nav to Display Navbar On When Click on mobileToggleBtns
*********************************************************/
mobileToggleBtns.onclick = function () {
    nav.classList.toggle("active");
}


