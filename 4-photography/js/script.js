// SIDE BAR

var button = document.getElementById("side-bar");

function toggleSidebar() {
    button.classList.toggle('active');
}

button.onclick = toggleSidebar;