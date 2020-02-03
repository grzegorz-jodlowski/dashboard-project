function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar--narrow');
  document.querySelector('.main-content').classList.toggle('main-content--wide');
}

document.querySelector('.sidebar-top__hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});

const links = document.querySelectorAll('.sidebar-menu__link');
const sections = document.querySelectorAll('.section');


for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    for (let link of links) {
      link.classList.remove('active-link');
    }
    link.classList.toggle('active-link');
    for (const section of sections) {
      section.classList.remove('show');
    }
    if (link.getAttribute('href') == '#general') {
      document.querySelector(`.${link.getAttribute('href').replace('#', '')}`).classList.add('show');
      document.querySelector('.links').classList.add('show');
    } else {
      document.querySelector(`.${link.getAttribute('href').replace('#', '')}`).classList.add('show');
    }
  });
}



// Chart plugin settings

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
      label: "Signups",
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: "FTD",
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: "Earned",
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
});
