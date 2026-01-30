const acceptBtn = document.querySelector('#acceptedButton');
const declineBtn = document.querySelector('#declinedButton');
const messageBtn = document.querySelector('#messageButton');
const callStatus = document.querySelector(`#callStatus`)

acceptBtn.addEventListener("click" , ()=>{
callStatus.textContent = "Call Accepted!";
callStatus.style.backgroundColor = "lightgreen";
});

declineBtn.addEventListener('click', () => {
callStatus.textContent = "Call Declined.";
callStatus.style.backgroundColor = "lightcoral";
});
/*
messageBtn.addEventListener(`click`, () =>{
callStatus.textContent = "Message.";
callStatus.style.backgroundColor = "lightblue";
});
*/
messageBtn.addEventListener(`click`, () =>{
callStatus.textContent = "Talk again.";
callStatus.style.backgroundColor = "lightblue";
 setTimeout(() => {
 alert("I will call you later"); // Show alert after update
}, 200);
})




