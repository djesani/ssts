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
