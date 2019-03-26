$(document).ready(function(){
    $("#p2, #p3, #p4").hide();
    $("#p1").click(function(){
      $("#p2").show();
    });
    $("#p2").click(function(){
        $("#p3").show();
      });
      $("#p3").click(function(){
        $("#p4").show();
      });
  });