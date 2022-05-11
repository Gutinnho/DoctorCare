window.addEventListener('scroll', onScroll);

function onScroll() {
   shwNavBarOnScroll();
   shwBackToTopButton(services);
}

function shwNavBarOnScroll() {
   if (scrollY > 12.5) {
      navigation.classList.add('scroll');
   } else {
      navigation.classList.remove('scroll');
   }
}

function shwBackToTopButton(section) {
   const targetLine = scrollY + innerHeight / 2

   const sectionTop = section.offsetTop
   const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

   backToTopButton.classList.remove('shw')
   if (sectionTopReachOrPassedTargetline) {
      backToTopButton.classList.add('shw')
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded');
}

function closeMenu() {
   document.body.classList.remove('menu-expanded');
}