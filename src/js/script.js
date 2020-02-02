function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('sidebar__narrow', visible);
}

document.querySelector('.sidebar-top__hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
