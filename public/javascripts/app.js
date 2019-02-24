
const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submission cancelled.');

var inval = $('#adminForm :input');
console.log(inval);

var value = $("#inval").val();
console.log(value);

function showValues() {
var fields = $( "adminForm:input" ).serializeArray();
    $( "#inval" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#inval" ).append( field.value + " " );
    });

}
$( "select" ).change( showValues );
showValues();
});


// $('#adminForm').submit(function() {
//   $(this).children('input[type=submit]').prop('disabled', true)
//
//
//
// });
