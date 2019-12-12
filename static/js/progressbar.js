
function progressBarMove() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 15);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("demo").innerHTML = width * 1  + '%';
      }
    }
  }
  