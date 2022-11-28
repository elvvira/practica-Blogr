const mainNavElement = document.getElementById ('main-nav');
const menuIconElement = document.getElementById ('menu-icon');

const menuItemElement = document.getElementById ('menu-item')
const submenuElement = document.getElementById ('submenu');

menuIconElement.addEventListener('click', () => {
    mainNavElement.classList.toggle('main-nav--show');
    rootStyles.setProperty('--transition', 'transform .3s');
})
menuItemElement.addEventListener('click', () => {
    submenuElement.classList.toggle('submenu--show');
})

addEventListener('resize', () => {
    if (
      !mainNavElement.classList.contains('main-nav--show') &&
      matchMedia('(min-width:768px)').matches
    ) {
      mainNavElement.classList.add('main-nav--show');
    } else if (
      mainNavElement.classList.contains('main-nav--show') &&
      !matchMedia('(min-width:768px)').matches
    ) {
      mainNavElement.classList.remove('main-nav--show');
    }
    rootStyles.setProperty('--transition', 'none');
  });