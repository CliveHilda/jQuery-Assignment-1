$(document).ready(function(){

  $(".step").hide();
  $("#hideAll").hide();


  $("#showAll").click(function(){
    $(".step").show(300)
    $("#showAll").hide();
    $("#hideAll").show();
  });

  $("#hideAll").click(function(){
    $(".step").hide(300)
    $("#showAll").show();
    $("#hideAll").hide();
  })


  $("#showAll").mouseover(function(){
    $("#showAll").css("background-color","lightgreen")
  });

  $("#showAll").mouseleave(function(){
    $("#showAll").css("background-color","green")
  });

  $("#hideAll").mouseover(function(){
    $("#hideAll").css("background-color","pink")
  });

  $("#hideAll").mouseleave(function(){
    $("#hideAll").css("background-color","red")
  });


  $("#showGear").click(function(){
    $("#gear").html("Wilson <br> Nike <br> Babolat")
  })



});
