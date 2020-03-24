$(document).ready(function() {
  $(".walrus.clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".kitten.clickable").click(function() {
    $("#fade-out-kittens").fadeToggle();
    $("#fade-in-kittens").fadeToggle(); 
  });   
  $(".puppy.clickable").click(function() {
    $("#slide-up-puppy").slideToggle();
    $("#slide-down-puppy").slideToggle(); 
  });
  
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function(){ 
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#dark-mode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
});

