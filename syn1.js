function outputname(e) {
   let x,y,name,a,b,answer;
   x=document.getElementById("form1");
   y=x.elements["name"].value;
   document.getElementById("demo").innerHTML="Hello "+y+"!<br>";
   document.getElementById("demo").innerHTML+="Learn how to spell your name using BSL below... <br>";
   y.split('').forEach( function(letter, index) {
   console.log(letter);
   console.log(index);


   let carouselItemHTMLItem=`<div class="carousel-item" id="${letter-index}"></div>` // string interpoliation -> uses backticks to give access to variable inside string

   if (letter === "H" || letter === "J") {
     let carouselItemHTMLImage=`<div .... video`
   } else {
     let carouselItemHTMLImage=`<img src="Letter_${letter.toUpperCase()}.png" class="d-block w-100" style="border-radius:1em" height=750px>`
   }

   $(".carousel-inner").append(carouselItemHTMLItem);
   $(`${letter-index}`).append(carouselItemHTMLImage);
 })
}


// y.split('') /// ['d', 'a']
//
// ['d', 'a'].forEach( function(thing) {
//   console.log(thing)
// }
//
// // d
// // a


// const, let, var
// == / ===
