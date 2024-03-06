// Ensure that localStorage.theme is defined
if (!localStorage.theme) {
	localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.theme !== "light")) {
	document.documentElement.classList.add("dark");
	document.documentElement.style.colorScheme = "dark";
} else {
	document.documentElement.classList.remove("dark");
	document.documentElement.style.colorScheme = "";
}

// Defines the initial icon of the theme based on checking localStorage.theme and prefers-color-scheme. Then toggle the svg icons base on their ID.
if (localStorage.theme === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.theme !== "light")) {
	document.querySelector("#svg-moon").classList.add("hidden");
	document.querySelector("#svg-sun").classList.remove("hidden");
} else {
	document.querySelector("#svg-moon").classList.remove("hidden");
	document.querySelector("#svg-sun").classList.add("hidden");
}
