let darkModeButton = document.getElementById('dark-mode');
let lightModeButton = document.getElementById('light-mode');
let body = document.body;
let heading1 = document.querySelector('h1');
let heading2 = document.querySelector('h2');
let heading3 = document.querySelector('h3');
let navbar = document.querySelector('nav');
let introbar = document.getElementById('intro');
let skillbar = document.getElementById('skill-container');
let workbar = document.getElementById('projects');
let conclusion = document.getElementById('conclusion');
let skillHeading = document.getElementById('skillHeading');
let contactHeading = document.getElementById('contactHeading');
let contactHeading2 = document.getElementById('contactHeading2');

let enableDarkMode = function(){
    darkModeButton.style.display='none';
    lightModeButton.style.display='inline-block';
    body.style.backgroundColor='black';
    heading1.style.color='white';
    heading2.style.color='white';
    heading3.style.color='white';
    navbar.style.backgroundColor='#121212';
    introbar.style.backgroundColor='#121212';
    skillbar.style.backgroundColor='black';
    workbar.style.backgroundColor='#121212';
    conclusion.style.backgroundColor='#121212';
    skillHeading.style.color='white';
    contactHeading.style.color='white';
    contactHeading2.style.color='white';
}

let enableLightMode = function(){
    darkModeButton.style.display='inline-block';
    lightModeButton.style.display='none';
    body.style.backgroundColor='white';
    heading1.style.color='#141c3a';
    heading2.style.color='#141c3a';
    heading3.style.color='#141c3a';
    navbar.style.backgroundColor='#6E07F3';
    introbar.style.backgroundColor='#6E07F3';
    skillbar.style.backgroundColor='white';
    workbar.style.backgroundColor='#6E07F3';
    conclusion.style.backgroundColor='#6E07F3';
    skillHeading.style.color='#141c3a';
    contactHeading.style.color='#141c3a';
    contactHeading2.style.color='#141c3a';
}

darkModeButton.addEventListener('click',enableDarkMode);
lightModeButton.addEventListener('click',enableLightMode);