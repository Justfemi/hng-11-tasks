const nav = document.querySelector('nav');
const hamburger = document.querySelector('.icons');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  // console.log("clicked")
  if (nav.classList.contains('show')) {
    hamburger.innerHTML = '<i class="bx bx-x"></i>';
  } else {
    hamburger.innerHTML = '<i class="bx bx-menu"></i>';
  }
});

document.addEventListener('scroll', () => {
  nav.classList.remove('show');
  hamburger.innerHTML = '<i class="bx bx-menu"></i>';
});

// navLinks[0].addEventListener('click', () => {
//   nav.classList.remove('show');
// })

navLinks.forEach( function(link) {
  link.addEventListener('click', () => {
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active');
    });
    link.classList.add('active');
    nav.classList.remove('show');
    hamburger.innerHTML = '<i class="bx bx-menu"></i>';
  })
})