// Select Toggle Button
const toggleBtn1 = document.getElementById('toggle-btn');
// Select Navbar
const navbar = document.getElementById('navbar');
// Select toggle Mode
const toggleBtn2 = document.querySelector('.toggle-btn');
// Select Body
let body = document.querySelector("body");
if (toggleBtn1) {
    // Add Click Event Listener to Toggle Button
    toggleBtn1.addEventListener('click', toggleSidebar);
}
function toggleSidebar() {
    const sidebar = document.getElementById("side-bar");
    const icon = document.querySelector("#toggle-btn i");
    
    sidebar.classList.toggle("collapsed");
    
    if (sidebar.classList.contains("collapsed")) {
        icon.className = "ti ti-layout-sidebar-left-expand";
        // Update the CSS variable so the grid column shrinks too
        document.documentElement.style.setProperty('--sidebar-width', '72px');
    } else {
        icon.className = "ti ti-menu-2";
        // Restore original width
        document.documentElement.style.setProperty('--sidebar-width', '250px');
    }
}
const toggleMode = () => {
    const icon = document.querySelector(".toggle-btn i");

    body.classList.toggle('active');
    
    if (body.classList.contains('active')) {
        // toggleBtn2.innerHTML = '🌙';
        icon.className = "ti ti-moon-stars";
    } else {
        // toggleBtn2.innerHTML = '☀️';
        icon.className = "ti ti-sun-high";
    }
}
if (toggleBtn2) {
    toggleBtn2.addEventListener("click", toggleMode);
}

// const toggle = () => {
//     let mode = "light";

//     if (mode === "light") {
//         document.querySelector("body").style.backgroundColor = 'red';
//         toggleMode.innerText = "🌙";
//         mode = "dark";
//     } else {
//         document.querySelector("body").style.backgroundColor = 'white';
//         toggleMode.innerText = "☀️";
//         mode = "light";
//     }
// }
