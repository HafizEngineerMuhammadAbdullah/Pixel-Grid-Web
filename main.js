// Select Toggle Button
const toggleBtn = document.getElementById('toggle-btn');
// Select Navbar
const navbar = document.getElementById('navbar');
if (toggleBtn) {
    // Add Click Event Listener to Toggle Button
    toggleBtn.addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
    const sidebar = document.getElementById("side-bar");
    const icon = document.querySelector("#toggle-btn i");

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
        icon.className = "ti ti-layout-sidebar-left-expand";
        // Update the CSS variable so the grid column shrinks too
        document.documentElement.style.setProperty('--sidebar-width', '52px');
    } else {
        icon.className = "ti ti-menu-2";
        // Restore original width
        document.documentElement.style.setProperty('--sidebar-width', '250px');
    }
}