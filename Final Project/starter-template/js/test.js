/*$(function(){  // $(document).ready shorthand
  $("#helloworld").hide().fadeIn('slow');
});


  $("button").on("click", function() {
    alert("Clicked!");
  });

function myFunction() {
  document.getElementById("demo").innerHTML = "hello world";
}
*/

$(document).ready(function() {
  $("#helloworld").delay(500).fadeIn(2000);
});
$(document).ready(function() {
  $("#helloworld_img").delay(1000).fadeIn(1000);
});
$(document).ready(function() {
  $("#fade_in").delay(1500).fadeIn(2000);
});
$(document).ready(function() {
  $("#fade_in2").delay(2000).slideDown(1000);
});

$(document).ready(function() {
  $("#homepage").fadeIn("normal");
});
$(document).ready(function() {
  $("#contactme").fadeIn("normal");
});
$(document).ready(function() {
  $("#proj").fadeIn("normal");
});
$(document).ready(function() {
  $("#edu").fadeIn("normal");
});
$(document).ready(function() {
  $("#extra").fadeIn("normal");
});
