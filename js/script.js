let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let darkModeIcone = document.querySelector('#darkMode-icon');

darkModeIcone.onclick = () => {
    darkModeIcone.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode')
};

