let darkModeButton = document.getElementById('dark-mode');
let lightModeButton = document.getElementById('light-mode');

let enableDarkMode = function(){
    darkModeButton.style.display='none';
    lightModeButton.style.display='inline-block';
}

let enableLightMode = function(){
    darkModeButton.style.display='inline-block';
    lightModeButton.style.display='none';
}
darkModeButton.addEventListener('click',enableDarkMode);
lightModeButton.addEventListener('click',enableLightMode);