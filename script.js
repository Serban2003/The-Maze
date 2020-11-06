var audio = new Audio('scary.mp3');
    function showCoords(event) {
        var x = event.clientX;
        var y = event.clientY;
        var coor = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("demo").innerHTML = coor;
    }

    function clearCoords() {
        document.getElementById("demo").innerHTML = "X coords: 0, Y coords: 0";
    }
    var sem = 0;

    function showDiv() {
        document.getElementById('ready').classList.toggle("show");

        sem++;
        var totalSeconds = document.getElementById("seconds"),
            count = 0;
        setInterval(setTime, 1000);

        function setTime() {
            if (sem == 5) count = count;
            else count++;
            totalSeconds.innerHTML = count;
        }
        audio.play();
    }

    function Restart() {
        document.getElementById("over").classList.toggle("show1");
        sem = 5;
    }
    
    function Restart1() {
        document.getElementById("jumpscare").classList.toggle("show1");
        sem = 5;
        audio = new Audio('jumpscare.mp3');
        audio.play();
    }

    function Win() {
        document.getElementById("backgr2").classList.toggle("show1");
        document.getElementById("backgr1").classList.toggle("show");
    }
    
    function Win2() {
        document.getElementById("backgr3").classList.toggle("show2");
        document.getElementById("backgr2").classList.toggle("show1");
    }

    function Win3() {
        document.getElementById("win").classList.toggle("show1");
        sem = 5;
        setTimeout(function () {
            Restart1();
        }, 3000);
    }
    

    function Door(){
        document.getElementById("door").classList.toggle("showDoor");
    }
    function Door2(){
        document.getElementById("door2").classList.toggle("showDoor2");
    }

 const refreshRate = 1000/ 60;
 const maxYPosition = 280;
 const maxXPosition = 120;
 let rect1 = document.getElementById('obst1');
 let rect3 = document.getElementById('obst3');
 let rect2 = document.getElementById('obst2');
 let rect4 = document.getElementById('obst4');
 let speedY = 3;
 let positionY = 120;
 let speedX = 3;
 let positionX = 280;
 function step() {
   positionY = positionY + speedY;
   positionX = positionX + speedX;
   if (positionY > maxYPosition || positionY < 120) {
     speedY = speedY * (-1);
   }
   if (positionX < maxXPosition || positionX > 280) {
    speedX = speedX * (-1);
  }
   rect1.style.top = positionY + 'px';
   rect3.style.top = positionY + 'px';
   rect2.style.top = positionX + 'px';
   rect4.style.top = positionX + 'px';
   window.requestAnimationFrame(step);
 }
 window.requestAnimationFrame(step);

