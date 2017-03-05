function main() {
  $('.header').hide();

  $('.header').fadeIn(4000);

  $('.nav').hide();
  $('.nav').fadeIn(1000);
  $('.hoods').hide();
  $('.hoods').fadeIn(2000);
};

var returncode = $(".secretcode");
returncode.on("click", function(){
  var name = $("#code").val();
  alert("I heart coffee");
})


$(document).ready(main);
