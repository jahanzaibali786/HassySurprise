var countDownDate = new Date("Feb 24,2023 09:02:00 PM").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                             //hours + " H : "+ minutes + " M : " +
  document.getElementById("wishingtext").innerHTML =hours +" Hr : "+minutes+" Min : "+seconds + " Sec" + "<br><br><br><br><br> Prepared By Hussy";

 if (distance < 0) 
 {
    clearInterval(countdownfunction);
    const start = () => {
      setTimeout(function() {
          confetti.start()
      }, 1000); 
      };
    start();
    document.getElementById("leftname").innerHTML ="Happy Birthday To TaNnu ❤️ "
    document.getElementById("head").innerHTML ="Happy Birthday To You"
    document.getElementById("wishingtext").innerHTML="Happy birthday to the one who holds my heart and dreams.I am wishing you the most blessed of years this next year. I love you! On this very special day, I want you to know how much you are loved, not just by me but by everyone who knows you.Happy birthday, sweet love! Here’s to you, the culmination of all of my hopes and dreams. May today be a day filled with joy, blessings, and peace.Happy birthday, dear one!Today is yet another chance to celebrate the awesome uniqueness that is you. You are sweet, kind, and vibrant in every way. Thank you for the person you are for me.</p>"
   //  document.getElementById("maincard").setAttribute("style",'background-color:red;')
    document.getElementById("maincard").setAttribute("style", 'background-image: linear-gradient(to bottom, rgba(255, 255, 255), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1527481138388-31827a7c94d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")')
    document.getElementById("backpage").setAttribute("style", 'background-image:linear-gradient(to bottom, rgb(169, 167, 167), rgba(164, 159, 159, 0.5)), url("Hussy.jpeg");")')
    var img11 =document.getElementById("birthdaypicturefront");
    img11.src = 'https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png'
   }
}, 1000);
