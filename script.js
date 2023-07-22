let darkModeButton = document.getElementById('dark-mode');
let lightModeButton = document.getElementById('light-mode');
let body = document.body;
let heading1 = document.querySelector('h1');
let heading2 = document.querySelector('h2');
let heading3 = document.querySelector('h3');

let enableDarkMode = function(){
    darkModeButton.style.display='none';
    lightModeButton.style.display='inline-block';
    body.style.backgroundColor='black';
    heading1.style.color='white';
    heading2.style.color='white';
    heading3.style.color='white';
}

let enableLightMode = function(){
    darkModeButton.style.display='inline-block';
    lightModeButton.style.display='none';
    body.style.backgroundColor='white';
    heading1.style.color='#141c3a';
    heading2.style.color='#141c3a';
    heading3.style.color='#141c3a';
}

darkModeButton.addEventListener('click',enableDarkMode);
lightModeButton.addEventListener('click',enableLightMode);