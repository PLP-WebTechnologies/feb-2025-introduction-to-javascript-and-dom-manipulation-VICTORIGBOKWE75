const header = document.getElementById("header");
header.textContent = "Hello World!";

const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "lightblue";

const button = document.getElementsByClassName("changeText")[0];
const demo = document.getElementById("demo");

button.addEventListener("click", () => {
    demo.textContent = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    demo.style.fontSize = "20px";})