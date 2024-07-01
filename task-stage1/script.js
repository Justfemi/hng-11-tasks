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

navLinks.forEach( function(link) {
  link.addEventListener('click', () => {
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active');
    });
    link.classList.add('active');
    nav.classList.remove('show');
    hamburger.innerHTML = '<i class="bx bx-menu"></i>';
  })
});

// Get current UTC time
function updateUTCTime() {
  const utcTimeElement = document.getElementById('utc-time');
  const utcDayElement = document.getElementById('utc-day');
  const now = new Date();

  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  
  utcTimeElement.textContent = `${formattedTime}`;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dayOfWeek = daysOfWeek[now.getUTCDay()];

  utcDayElement.textContent = `${dayOfWeek}`;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();

