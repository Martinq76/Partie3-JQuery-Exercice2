$('#button2').click(function() {
  var counter = $('input').attr('value');
  $('input').attr('value', ++counter);
});
$('#button1').click(function() {
  var counter = $('input').attr('value');
  $('input').attr('value', --counter);
});
