<<<<<<< HEAD
const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));


const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
  let readMoreDiv = document.querySelector("#readmore");
  readMoreDiv.classList.toggle("hideshow");
});

const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let firstName = username.split(" ")
  let formattedName = username.toLocaleUpperCase();
 
username.charAt(0).toUpperCase() +
  username.substring(1).toLowerCase();
  document.querySelector("h1").textContent = `Welcome to the App, ${formattedName} !`;
=======
const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));


const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
  let readMoreDiv = document.querySelector("#readmore");
  readMoreDiv.classList.toggle("hideshow");
});

const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let firstName = username.split(" ")
  let formattedName = username.toLocaleUpperCase();
 
username.charAt(0).toUpperCase() +
  username.substring(1).toLowerCase();
  document.querySelector("h1").textContent = `Welcome to the App, ${formattedName} !`;
>>>>>>> 148251a8b6ec3a3e0863ed10238d5ebd867b24bd
});