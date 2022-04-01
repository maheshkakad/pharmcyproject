document.querySelector("form").addEventListener("submit", signUpFun);
   
var userData = JSON.parse(localStorage.getItem("userCreds"))||[]
function signUpFun() {
  event.preventDefault();
  alert("signup successfull");
  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    userName: document.querySelector("#user").value,
  };
  //console.log(userObj);
  userData.push(userObj);
  //console.log(userData)
  localStorage.setItem("userCreds",JSON.stringify(userData))

}