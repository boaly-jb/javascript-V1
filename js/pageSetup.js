// script.js

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
  }
  
  function toggleSubmenu(event, submenuId) {
    event.preventDefault(); // Prevent the default link behavior
    
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
  


  function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
  }
  
