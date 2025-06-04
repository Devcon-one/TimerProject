//new js file
// Menu toggle
  const toggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');

  toggle.addEventListener('click', () => {
    sideMenu.classList.toggle('hidden'); // Show or hide the side menu
  });

  // When clicking an option
  const menuItems = document.querySelectorAll('#side-menu li');
  const headings = document.querySelectorAll('.animated-heading');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Hide all headings
      headings.forEach(h => {
        h.classList.add('hidden');
        h.classList.remove('popflow-effect');
      });

      // Get the ID of the heading to show
      const headingId = item.getAttribute('data-heading');
      const heading = document.getElementById(headingId);

      // Show it and add the effect
      heading.classList.remove('hidden');
      heading.classList.add('popflow-effect');
    });
  });
