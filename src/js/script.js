function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar--narrow');
  document.querySelector('.main-content').classList.toggle('main-content--wide');
}

document.querySelector('.sidebar-top__hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
