const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav){
  navToggle.addEventListener('click', () => {
    const open = siteNav.style.display === 'block';
    siteNav.style.display = open ? 'none' : 'block';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}