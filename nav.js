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
    <a href="index.html"><img id="logoIcon"src="images/logo.png" alt="Logo" /></>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="index.html"><li>Home</li></a>
          <a href="service.html"><li>Service</li></a>
          <a href="contact.html"><li>Contact</li></a>
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