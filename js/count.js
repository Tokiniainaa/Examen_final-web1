let displaycount = document.getElementById("count");
let displaycount2 = document.getElementById("count2");
let displaycount3=document.getElementById("count3");
let displaycount4=document.getElementById("count4");
let count = 0;
let count2 = 0;
let count3=0;
let count4=0;

let isCounterStarted = false;

function incrementCount() {
  if (count < 8) {
    count++;
    displaycount.innerText = count;
    setTimeout(incrementCount, 300);
  }
}



function incrementCount2() {
  if (count2 < 100) { 
    count2++;
    displaycount2.innerText = count2;
    setTimeout(incrementCount2, 50);
  }
}




function incrementCount3() {
    if (count3 < 24) {
      count3++;
      displaycount3.innerText = count3;
      setTimeout(incrementCount3, 200);
    }
  }
  
  
  function incrementCount4() {
    if (count4 < 7) {
      count4++;
      displaycount4.innerText = count4;
      setTimeout(incrementCount4, 300);
    }
  }


  
function startCounterWhenVisible(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isCounterStarted) {
        isCounterStarted = true;
        incrementCount();
        incrementCount2();
        incrementCount3();
        incrementCount4()
      }
    });
  }
  
  const sectionWithCounter = document.getElementById("about");
  const observer = new IntersectionObserver(startCounterWhenVisible, { threshold: 0.5 });
  
  observer.observe(sectionWithCounter);