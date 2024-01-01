var hourDisplay = document.getElementById("hour");
var minDisplay = document.getElementById("min");
var secDisplay = document.getElementById("sec");

function refreshTime() {
  var now = new Date();
  
  var countdownH = 23 - now.getHours();
  var countdownM = 59 - now.getMinutes();
  var countdownS = 59 - now.getSeconds();
  
  if (countdownS < 10){
    countdownS = "0" + countdownS;
  }
  if (countdownM < 10){
    countdownM = "0" + countdownM;
  }
  if (countdownH < 10) {
    countdownH = "0" + countdownH;
  }
  
  if (countdownH == "00" && countdownM == "00" && countdownS == "00") {
    window.location.href="https://www.canva.com/design/DAF4l-GpPNk/HkTawAEOiiTEjPlcEHpoxg/edit?utm_content=DAF4l-GpPNk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
  }
  
  hourDisplay.innerHTML = countdownH;
  minDisplay.innerHTML = countdownM;
  secDisplay.innerHTML = countdownS;
}

setInterval(refreshTime, 1000);
