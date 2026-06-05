// Select Toggle Button
const toggleSidebarBtn = document.getElementById('toggle-btn');
// Select toggle Mode
const toggleThemeBtn = document.querySelector('.toggle-btn');
// Select Body
const bodyElement = document.body;
if (toggleSidebarBtn) {
    // Add Click Event Listener to Toggle Button
    toggleSidebarBtn.addEventListener('click', toggleSidebar);
}
function toggleSidebar() {
    const sidebar = document.getElementById("side-bar");
    const icon = document.querySelector("#toggle-btn i");
    
    if (!sidebar || !icon) return; 
    
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

    bodyElement.classList.toggle('active');
    
    if (bodyElement.classList.contains('active')) {
        // toggleBtn2.innerHTML = '🌙';
        icon.className = "ti ti-moon-stars";
    } else {
        // toggleBtn2.innerHTML = '☀️';
        icon.className = "ti ti-sun-high";
    }
}

if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", toggleMode);
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
