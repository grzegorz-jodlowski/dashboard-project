<p align="center">
<a href="https://grzegorz-jodlowski.github.io/dashboard-project/"><img src="src/images/chart.png" title="chart" alt="chart with signups and FTD"></a>
</p>



# <p align="center">📈 Dashboard project</p>
<p align="center">Project for exercise of SCSS and vanilla JavaScript</p>

</br>

## Table of Contents

- [What's this project about?](#about)
- [Technologies used](#technologies)
- [What I learned?](#what)
- [Interesting code snippet](#interesting)
- [Installation](#install)
- [GitHub Pages](#gitHub)

</br>

## <a name="about"></a>What's this project about?

This is a SPA (Single Page Application) as a admin panel.
It can be implemented as a dashboard for many business fields, has a sidebar with navigation and a top bar with user data.
The whole page is coded with RWD (Responsive Web Desidn) rules.
Interesting thing is the interactive graph with adjustment to the window size.

</br>

## <a name="technologies"></a>Technologies used
- HTML
- CSS
- SCSS (with BEM approach)
- JavaScript
- npm
- GIT

</br>

## <a name="what"></a>What I learned?
- use <a href='https://necolas.github.io/normalize.css/'>normalize.css</a> and know the difference between normalize and reset styles,
- analyze the design to divide into components and sections,
- use <a href='http://getbem.com/introduction/'>BEM</a> in a more advanced way,
- create styleguide as an improvement in component design and know how <i>naked elements</i> will look like,
- test responsiveness using responsive mode in the browser inspector,
- create a mobile menu in the form of a sidebar (eg. <a href='https://tympanus.net/Development/SidebarTransitions/'>sidebar transitions</a>),
- handle the difficulty of displaying long content on a page that cannot be reduced (eg. <a href='https://codepen.io/SitePoint/pen/azeYqx'>Responsive Table with Tablesaw</a>),
- add a scrolling wrapper to part of the page (eg. <a href='https://css-tricks.com/pure-css-horizontal-scrolling/'>CSS tricks</a>),
- create Bootstrap-style responsive grid,
- use different sizes of images depending on the user's screen size (by using the HTML5 srcset property),
- manipulate SVG image properties,
- validate and style forms in a more advanced way,
- build modals (pop-ups),
- create interactive charts using the <a href='https://www.chartjs.org/'>Chart.js plugin</a>,
- use VS code plugins such as:
  - <a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag'>Auto Close Tag</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag'>Auto Rename Tag</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview'>Auto-Open Markdown Preview</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel'>Babel JavaScript
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments'>Better Comments
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer'>Bracket Pair Colorizer
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=aeschli.vscode-css-formatter'>CSS Formatter
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome'>Debugger for Chrome
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig'>EditorConfig for VS Code
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint'>ESLint
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=kenhowardpdx.vscode-gist'>Gist
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'>GitLens
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare'>Live Share
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=xyz.local-history'>Local History
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense'>npm Intellisense
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent'>Paste and Indent
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'>Path Intellisense
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode'>Quokka.js
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=gencer.html-slim-scss-css-class-completion'>SCSS Everywhere
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter'>SCSS Formatter
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss'>SCSS IntelliSense
</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces'>Trailing Spaces</a>,
  - <a href='https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log'>Turbo Console Log
</a>,


</br>

## <a name="interesting"></a>Interesting code snippet (for me of course 😉)
- SCSS mixin and media for grid

```scss
@mixin grid($prefix) {
  @for $i from 1 through 12 {
    .col-#{$prefix}-#{$i} {
      $width: 100% / 12 * $i;
      flex: 0 0 $width;
      max-width: $width;
    }
  }
}

@for $i from 1 through 12 {
  .col-sm-#{$i} {
    $width: 100% / 12 * $i;
    flex: 0 0 $width;
    max-width: $width;
  }
}

@media (max-width: 767px) {
  @include grid("sm");
}

@media (min-width: 768px) {
  @include grid("md");
}

@media (min-width: 992px) {
  @include grid("lg");
}

@media (min-width: 1200px) {
  @include grid("xl");
}

```

- JS code for menu slide

```js
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('sidebar--narrow');
  document.querySelector('.main-content').classList.toggle('main-content--wide');
}

document.querySelector('.sidebar-top__hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
```
- Chart settings (Chart.js)

```js
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
      hidden: true,
    }]
  },
});

```

</br>

## <a name="install"></a>Installation

- use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies:

```bash
npm install

or

npm i
```
- run watch mode to start the server, constantly refreshing and more:

```bash
npm run watch
```

</br>

## <a name="gitHub"></a>GitHub Pages
<a href="https://grzegorz-jodlowski.github.io/dashboard-project/">Dashoard project</a>


</br>
</br>

  *completely self-made project implemented as part of the 9-month [Web Developer Plus](https://kodilla.com/pl/bootcamp/webdeveloper/?type=wdp&editionId=309) course organized by [Kodilla](https://drive.google.com/file/d/1AZGDMtjhsHbrtXhRSIlRKKc3RCxQk6YY/view?usp=sharing)
