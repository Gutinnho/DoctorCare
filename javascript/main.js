window.addEventListener('scroll', onScroll);

function onScroll() {
   shwNavBarOnScroll();
   shwBackToTopButton(services);

   activateMenuAtCurrentSection(home);
   activateMenuAtCurrentSection(services);
   activateMenuAtCurrentSection(about);
   activateMenuAtCurrentSection(contact);
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

function activateMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2

   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight
   const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

   const sectionEndsAt = sectionTop + sectionHeight
   const sectionEndPassedTargetline = sectionEndsAt <= targetLine

   const sectionBoundaries =
      sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

   const sectionId = section.getAttribute('id')
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuElement.classList.remove('active')
   if (sectionBoundaries) {
      menuElement.classList.add('active')
   }
}

// SrcollReveal
ScrollReveal({
   origin: 'top',
   distance: '50px',
   duration: 1000,
}).reveal(`#navigation,
#home,
#home header,
#home button,
#services header,
#services .card`);

ScrollReveal({
   origin: 'right',
   distance: '50px',
   duration: 700,
}).reveal(`#about header,
#about p,
#about img`);

ScrollReveal({
   origin: 'left',
   distance: '50px',
   duration: 700,
}).reveal(`#contact, 
#contact button`);

ScrollReveal({
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
}).reveal(`footer`);
