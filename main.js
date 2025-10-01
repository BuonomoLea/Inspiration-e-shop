const reveals = document.querySelectorAll('.reveal');
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});
reveals.forEach(el => observer2.observe(el));


const curtain = document.querySelector('.curtain');
window.addEventListener('load', () => {
  curtain.classList.add('active');
  setTimeout(() => {
    curtain.remove();
  }, 1000);
});


const items = document.querySelectorAll('.entrance-title');
  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active');
    }, i * 200);
  });


// menu de navigation
function openMenu(menuToOpen, menuToClose) {
  menuToClose.classList.add('dropdown-child');
  if (menuToOpen) {
    menuToOpen.classList.remove('dropdown-child');
  }
}
function closeMenu(menu) {
  menu.classList.remove('dropdown-child');
}
const shopMenu = document.getElementById('shopMenu');
const shop = document.getElementById('shop');
const conceptMenu = document.getElementById('conceptMenu');
const concept = document.getElementById('concept');

// SHOP
shop.addEventListener('mouseover', () => {
  openMenu(shopMenu, conceptMenu);
});
shopMenu.addEventListener('mouseleave', () => {
  openMenu( "", shopMenu);
});

// CONCEPT
concept.addEventListener('mouseover', () => {
  openMenu(conceptMenu, shopMenu);
});

conceptMenu.addEventListener('mouseleave', () => {
   openMenu( "", conceptMenu);
});


// pour li menu link 
//  onmouseover="if(!document.querySelector('html.headBlackTemp'))
//  document.documentElement.classList.add('headBlackTemp')"
//  onmouseleave="if(document.querySelector('html.headBlackTemp'))
//  document.documentElement.classList.remove('headBlackTemp')"
//  onmouseover="if(!document.querySelector('html.headBlackTemp')) document.documentElement.classList.add('headBlackTemp')" onmouseleave="if(document.querySelector('html.headBlackTemp')) document.documentElement.classList.remove('headBlackTemp')"



// pour header-search
//  onclick="document.querySelector('#top-search-wrapper').classList.add('expanded')" aria-label="recherche"


// const section2 = document.querySelector('#section2');
// const section3 = document.querySelector('#section3');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       section2.classList.add('section-hidden');
//     } else {
//       section2.classList.remove('section-hidden');
//     }
//   });
// }, {
//   threshold: 0.1
// });
// observer.observe(section3);