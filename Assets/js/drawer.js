document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const drawerClose = document.getElementById("drawer-close");
  const overlay = document.getElementById("drawer-overlay");

  // Open drawer
  menuToggle.addEventListener("click", () => {
    drawer.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  });

  // Close drawer
  drawerClose.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });

  // Close drawer when clicking overlay
  overlay.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
});

document.getElementById('year').textContent = new Date().getFullYear();