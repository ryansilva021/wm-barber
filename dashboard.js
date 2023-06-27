let isShowMenu = false;
let menu = document.getElementById('menu');
let menuIcon = document.getElementById('menu-icon');

function showMenu() {
  if (isShowMenu) {
    menu.style.display = 'none';
    isShowMenu = false;


  } else {
    menu.style.display = 'flex';
    isShowMenu = true;
  }
}
menuIcon.addEventListener('click', () => {
  showMenu();
});