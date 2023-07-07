var timeleft = 10;
var timer = setInterval(function (){
    if(timeleft <= 0){
        location.href = "404.html";
    } else {
      document.getElementById("x").innerHTML = 'you have ' + Math.floor(timeleft*10)/10 + ' seconds left';
    }
    timeleft -= 0.1;
  }, 100);