function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('sidebar--narrow', visible);
  document.querySelector('.main-content').classList.toggle('main-content--wide', visible);
}

document.querySelector('.sidebar-top__hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
