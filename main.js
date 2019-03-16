document.onmousemove = animateCircles;

var colors = ['#50f' , '#90f', '#28d' , '#f55', '#0af', "#80f"];

function animateCircles(event){
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var colbg = colors[Math.floor(Math.random() * colors.length)];
    var colbd = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = colbd;
    circle.style.background = colbg;
    circle.style.transition = "all 0.3s linear 0.2s";

    circle.style.right = circle.offsetLeft - 20 + 'px';

    circle.style.width = "30px";
    circle.style.height= "30px";

    circle.style.opacity=0;
}


//------------------
//timer part

//set the date HERE
var countDownDate = new Date("Mar 22, 2019 00:00:00").getTime();

//update teh countDown every 1 section
var countdownfunction = setInterval(
  function()
  {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //output element's id = demo
    document.getElementById("demo").innerHTML = days + "d " + hours +  "h " + minutes + "m " + seconds + "s ";

    //if countdown is over will write something HERE [ ONCE THE TIMER IS DONE WE'LL HAVE TO REPLACE THIS BIT. ]

    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("demo").innerHTML = "its on..blah blah!!";
    }


  } , 1000);

//wait dont change anything right now. il get confused.  XD

//-------------------
// introducing le sparklez !
// sparkles a temporary failure.
//lol
