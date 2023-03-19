var i = 0;
var txt = '請稍等...'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i++);
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("demo").innerHTML = "";
    i = 0;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;