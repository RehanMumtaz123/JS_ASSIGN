// 1. Show an alert box on click on a link.
function myFunction() {
    alert("I am an alert box!");
  }
  
  //   Display some Mobile images in browser. On click on an
  //   image Show the message in alert to user
  
  function mFunction() {
      alert("Thanks for purchasing!");
    }

//     3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function dele(e){
    var p =e.parentNode.parentNode;
    p.parentNode.removeChild(p);
}

// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout
// ----
// check the html code for that


// Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
var click=0;
function Up(){
    click+=1;
    document.getElementById('check').innerHTML=click;
}
function down(){
    click-=1;
    document.getElementById('check').innerHTML=click;
}