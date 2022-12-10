var form = document.getElementById("form");
function handleForm(event) { 
  event.preventDefault();
  myFunction(); } 
form.addEventListener('submit', handleForm);

function myFunction() {
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    submitOK="true";
    if (first.length === 0) {
        document.getElementById("sm1").style.opacity="1";
        document.getElementById("firstname").style.cssText=" background-image: url(./images/icon-error.svg); border-color:var(--red)";
        submitOK = "false";
      }
      else{
        document.getElementById("sm1").style.opacity="0";
        document.getElementById("firstname").style.cssText=" background-image: none; border-color:var(--Grayish-blue)";
      } 
    if (last.length === 0) {
        document.getElementById("sm2").style.opacity="1";
        document.getElementById("lastname").style.cssText=" background-image: url(./images/icon-error.svg); border-color:var(--red)";
        submitOK = "false";
      } 
      else{
        document.getElementById("sm2").style.opacity="0";
        document.getElementById("lastname").style.cssText=" background-image: none; border-color:var(--Grayish-blue)";
      } 
    if (email.length === 0) {
        document.getElementById("sm3").style.opacity="1";
        document.getElementById("email").style.cssText=" background-image: url(./images/icon-error.svg); border-color:var(--red)";
        submitOK = "false";
      } 
      else{
        document.getElementById("sm3").style.opacity="0";
        document.getElementById("email").style.cssText=" background-image: none; border-color:var(--Grayish-blue)";
      } 
    if (password.length === 0) {
        document.getElementById("sm4").style.opacity="1";
        document.getElementById("password").style.cssText=" background-image: url(./images/icon-error.svg); border-color:var(--red)";
        submitOK = "false";
      } 
      else{
        document.getElementById("sm4").style.opacity="0";
        document.getElementById("password").style.cssText=" background-image: none; border-color:var(--Grayish-blue)";
      } 
}