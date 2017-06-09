/*Mise en forme des question interviews*/

$('#int1').click(function(){
  $('#int1txt').slideToggle("hidin")
});

$('#int2').click(function(){
  $('#int2txt').slideToggle("hidin")
});

$('#int3').click(function(){
  $('#int3txt').slideToggle("hidin")
});

$('#int4').click(function(){
  $('#int4txt').slideToggle("hidin")
});

$('#int5').click(function(){
  $('#int5txt').slideToggle("hidin")
});

$('#int6').click(function(){
  $('#int6txt').slideToggle("hidin")
});

$('#int7').click(function(){
  $('#int7txt').slideToggle("hidin")
});

/*Animation accueil*/
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $("#intro").offset().top},
        'slow');
});