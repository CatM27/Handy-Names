var vid=document.getElementById("video");
function disableLoop() {
	vid.loop=false;
	vid.load();
}

$('.carousel').carousel();

function outputname(e) {
   let x,y,name,a,b,answer;
   x=document.getElementById("form1");
   y=x.elements["name"].value;
   document.getElementById("demo").innerHTML="Hello "+y+"!<br>";
   document.getElementById("demo").innerHTML+="Learn how to spell your name using BSL below... <br>";
   y.split('').forEach( function(letter, index) {
   console.log(letter);
   console.log(index);

   var carouselItemHTMLItem=`<div class="carousel-item" id="${letter+index}"></div>` // string interpoliation -> uses backticks to give access to variable inside string
   var carouselItemHTMLImage;
   if (letter == "H" || letter == "J") {
     carouselItemHTMLImage=`<video src="Letter_${letter.toUpperCase()}.mp4" class="d-block w-100" style="border-radius:1em" >`
   } else {
     carouselItemHTMLImage=`<img src="Letter_${letter.toUpperCase()}.png" class="d-block w-100" style="border-radius:1em">`
   }

   var carouselCaption = `<div class="carousel-caption"><h4>${letter.toUpperCase()}</h4></div>`

   $(".carousel-inner").append(carouselItemHTMLItem);
   $(`#${letter+index}`).append(carouselItemHTMLImage);
   $(`#${letter+index}`).append(carouselCaption);
   })
   delete x;
   delete y;
}


