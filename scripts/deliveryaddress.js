
document.querySelector("#formyes").addEventListener("submit", paymentFunction);

function paymentFunction(e) {
  e.preventDefault();
  var cc = document.getElementById("cc").value;
  var cvv = document.getElementById("cvv").value;
console.log(cc)
console.log(cvv)
  if (cc.length == 16 && cvv.length == 3) {
    alert("Enter Otp = 7575");
    document.querySelector(".otpIn").style.display = "flex";
  }

  if (!(cc.length == 16 && cvv.length == 3)) {
    alert("Incorrect Details");
  }
}

document.querySelector("#yesform").addEventListener("submit", paymentFunction1);

function paymentFunction1(e){
    e.preventDefault();
    var otp=document.querySelector("#otp").value; 
  if(otp == "7575"){
    window.location.href = "paysuccess.html";
  }else{
      alert("Incorrect OTP");
  }

}