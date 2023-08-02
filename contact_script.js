let darkModeButton = document.getElementById('dark-mode');
let lightModeButton = document.getElementById('light-mode');
let body = document.body;
let heading1 = document.querySelector('h1');
let navbar = document.querySelector('nav');
let submitnav = document.getElementById('submit-nav');
let label = document.querySelectorAll('label');

let enableDarkMode = function(){
    darkModeButton.style.display='none';
    lightModeButton.style.display='inline-block';
    body.style.background='black';
    heading1.style.color='white';
    navbar.style.backgroundColor='#121212';
    submitnav.style.backgroundColor='#121212';
    label.forEach(element => {
        element.style.color='white';
    });
}

let enableLightMode = function(){
    darkModeButton.style.display='inline-block';
    lightModeButton.style.display='none';
    body.style.backgroundColor='white';
    heading1.style.color='#141c3a';
    navbar.style.backgroundColor='#6E07F3';
}

darkModeButton.addEventListener('click',enableDarkMode);
lightModeButton.addEventListener('click',enableLightMode);