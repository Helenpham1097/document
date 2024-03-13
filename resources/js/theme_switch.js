// Defines the initial icon of the theme based on checking localStorage.theme and prefers-color-scheme. Then toggle the svg icons base on their ID.
if (localStorage.theme === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.theme !== "light")) {
	document.querySelector("#svg-sun").classList.remove("hidden");
	document.querySelector("#svg-moon").classList.add("hidden");
} else {
	document.querySelector("#svg-sun").classList.add("hidden");
	document.querySelector("#svg-moon").classList.remove("hidden");
}
