// Front-end demo interaction for the Aurelia Botanics information website.
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formNote').textContent =
    `Thank you, ${name || 'there'}! This demo form does not send messages to a server.`;
  this.reset();
});

// Collapse the mobile navigation after a visitor selects a section.
document.querySelectorAll('#navMenu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});