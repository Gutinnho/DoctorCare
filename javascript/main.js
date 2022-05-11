window.addEventListener('scroll', onScroll);

function onScroll() {
   shwNavBarOnScroll();
}

function shwNavBarOnScroll() {
   if (scrollY > 12.5) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded');
}

function closeMenu() {
   document.body.classList.remove('menu-expanded');
}