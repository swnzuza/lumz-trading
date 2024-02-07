var modal = document.getElementById('navbarLinks');
const x = document.querySelectorAll('#navLink');

x.forEach(function(element) {
    element.addEventListener("click", closeNav);
});

function openNav() {
  document.getElementById("navbarLinks").style.width = "100%";
}

function closeNav() {
  document.getElementById("navbarLinks").style.width = "0%";
}

window.onclick = function(event) {
    if (event.target == modal )  {
        modal.style.width = "0%";
    }
}



