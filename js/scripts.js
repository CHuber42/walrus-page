$(document).ready(function() {
  $(".walrus.clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".kitten.clickable").click(function() {
    $("#fade-out-kittens").fadeToggle();
    $("#fade-in-kittens").fadeToggle(); 
  });   
});

    $("PLACEHOLDER").fadeToggle();
    $("PLACEHOLDER").slideDown();
    $("PLACEHOLDER").slideUp();
    $("PLACEHOLDER").slideToggle();
