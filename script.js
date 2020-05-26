var clicks = 0;
var series = 0
var dhikri = "SubhanAll-llah";
var counter = 0;
var freeclicks = 0;

function clickme() {

counter+= 1;
  (clicks < 33 ? clicks += 1 : clicks = 1) && (clicks == 33 ? series += 1 : 0);
  (counter === 34 ? dhikri = "Elhamdulil-lah" : counter === 67 ? dhikri = "Allahu Ekber" : 0 );
  navigator.vibrate(50);


  if (counter === 100) {
      reset();
  }
 
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("dhikret").innerHTML = dhikri; 
  /*document.getElementById("total").innerHTML = counter;*/

}

function minus() {
  
  if (clicks > 0) {
    document.getElementById("clicks").innerHTML = --clicks;
    counter -= 1;
    navigator.vibrate(50);
  }
}

function reset() {

  clicks = 0;
  series = 0;
  dhikri = "SubhanAll-llah";
  counter = 0;

  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("dhikret").innerHTML = dhikri; 
  document.getElementById("total").innerHTML = counter;
  document.getElementById("seria").innerHTML = series;

}


function freeMode() {
  
  document.getElementById("clicks").innerHTML = clicks++ 
  navigator.vibrate(50);

  
  if (clicks === 1001) {
      reset();
  }

}

function switchMode(item){
  if(item.className == "on") {
     item.className="off";
     document.getElementById("dhikret").classList.add("hidden");
     document.getElementById("clicks").onclick = freeMode;
     reset();
  } else {
     item.className="on";
     document.getElementById("dhikret").classList.remove('hidden');
     document.getElementById("clicks").onclick = clickme;
 
     reset();
  }
}


