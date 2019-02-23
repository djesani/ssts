
const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submission cancelled.');



  var values = $(this).serialize();
  console.log(values);
});

// $('#adminForm').submit(function() {
//   $(this).children('input[type=submit]').prop('disabled', true)
//
//
//
// });
