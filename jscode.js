let menu = document.querySelector('#menu-icon');
let pages = document.querySelector('.pages');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    pages.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    pages.classList.remove('active');
}

const typed = new Typed('.multiple-work', {
      strings: ['Full-Stack Developer', 'UI/UX designer', 'video editor', ' VFX artist'],
      typeSpeed: 80,
      backspeed:80,
      backDelay:1200,
      loop:true,
    });