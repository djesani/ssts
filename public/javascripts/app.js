const element = document.querySelector('form');
element.addEventListener('submit', event => {

  event.preventDefault();
  console.log('Form submission cancelled.');

  var inval = $('#adminForm :input');
  console.log( inval);

  // var inval2 = inval[1].value;
  // console.log("ival2 " + inval2);

  var inval3 = {};
  for (var i = 0; i < inval.length-1; i++) {
//    inval[i].value = inval3[i];
    console.log("inval3 " + inval[i].value);
  }

});

  // var aaa = $('#eventDescription').val();
  // console.log("aaa " + aaa);
  //
  // var output = {};
  // $("adminForm").each(function() {
  //   if($(this).attr().length > 0) {
  //     output($(this).attr()) = $(this).value();
  //   }
  // });
  //
  // console.log("output " + output);
  //
  // var returnArray = {};
  // for (var i = 0; i < adminForm.length; i++){
  //   returnArray[adminForm[i]['name']] = adminForm[i]['value'];
  //   console.log(returnArray);
  // }
  // return returnArray;

  // function showValues() {
  //   var str = $( "adminForm:input" ).serialize();
  //   $( "#results" ).text( str );
  // }
  // $( "input[type='button']" ).on( "click", showValues );
  // $( "select" ).on( "change", showValues );
  // showValues();


  // var value = $("#inval").val();
  // console.log($(this).serialize());


  // function showValues() {
  //   var fields = $( "adminForm:input" ).serializeArray();
  //   $( "#results" ).empty();
  //   jQuery.each( fields, function( i, field ) {
  //     ( "#results" ).append( field.value + " " );
  //   });
  //
  // }
  // $( ":button" ).click( showValues );
  // showValues();




// $('#adminForm').submit(function() {
//   $(this).children('input[type=submit]').prop('disabled', true)
//
//
//
// });
