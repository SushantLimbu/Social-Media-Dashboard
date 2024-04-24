const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const radioButton = document.querySelectorAll('.toggle__wrapper input');

if(localStorage.getItem('colorMode') == 'dark') {
 setDarkMode();
 darkButton.click();
} else if (localStorage.getItem('colorMode') == 'light') {
 setLightMode();
 lightButton.click();
}

function setDarkMode() {
 document.querySelector('body').classList = "dark";
 localStorage.setItem('colorMode', 'dark');
}

function setLightMode(){
 document.querySelector('body').classList = "light";
 localStorage.setItem('colorMode', 'light');
}

for (let i = 0; i < radioButton.length; i++) {
 radioButton[i].addEventListener('click', (event) => {
  if (darkButton.checked) {
   localStorage.setItem('colorMode', 'dark')
   setDarkMode();
  } else {
   localStorage.setItem('colorMode', 'light')
   setLightMode();
  }
 })
};

function checkMode(){
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
     setDarkMode();
     darkButton.click();
 } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
     setLightMode();
     lightButton.click();
 }
}

function checkModeChange() {
 window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  checkMode();
 })
}

checkModeChange();
