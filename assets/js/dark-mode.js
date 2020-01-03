let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 

function addSunClass(){
	document.getElementById("theme-toggle").classList.remove("fa-moon");
	document.getElementById("theme-toggle").classList.add("fa-sun");
}

function addMoonClass(){
	document.getElementById("theme-toggle").classList.remove("fa-sun");
	document.getElementById("theme-toggle").classList.add("fa-moon");
}

if (systemInitiatedDark.matches) {
	addSunClass();
} else {
	addMoonClass();
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
	addSunClass();
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
	addMoonClass();
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		addMoonClass();
	} else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		addSunClass();
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		addMoonClass();
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		addSunClass();
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	addSunClass();
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	addMoonClass();
}