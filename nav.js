// navbar.js
function loadNavbar() {
    const navbarContainer = document.getElementById("navbar-container");
  
    const navbarHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
  </head>
  <body>
    <nav role="navigation">
    <img id="logoIcon"src="images/logo.png" alt="Logo" />
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  </body>
  </html>
  `;
  
    // Remove unnecessary elements (DOCTYPE, html tags)
    const navFragment = document.createRange().createContextualFragment(navbarHtml);
    const navContent = navFragment.querySelector("nav");
  
    navbarContainer.appendChild(navContent);
  }
  
  window.addEventListener("DOMContentLoaded", loadNavbar);