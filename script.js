var hourDisplay = document.getElementById("hour");
var minDisplay = document.getElementById("min");
var secDisplay = document.getElementById("sec");

function refreshTime() {
  now = new Date();
  
  var countdownH = 24 - parseInt(now.getHours());
  var countdownM = 60 - parseInt(now.getMinutes());
  var countdownS = 60 - parseInt(now.getSeconds());
  

  
  if (countdownS == 60){
    countdownM = countdownM + 1 ;
    countdownS = "0";
  }
  if (countdownH == 24) {
    countdownH = "00";
    window.location.href="https://www.canva.com/design/DAF4l-GpPNk/HkTawAEOiiTEjPlcEHpoxg/edit?utm_content=DAF4l-GpPNk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
    
    
  }
  
  hourDisplay.innerHTML = countdownH;
  minDisplay.innerHTML = countdownM;
  secDisplay.innerHTML = countdownS;
}

setInterval(refreshTime, 1000);