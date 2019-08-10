// Dynamically load images using progressively
progressively.init();

var submit = document.getElementById('subscribe-submit');

submit.addEventListener("click", function(){
    var email = document.getElementById('subscribe-email').value;
    var name = document.getElementById('subscribe-name').value;

    var isFieldValid = validate(email, name);

    if(isFieldValid.email && isFieldValid.name){
      var subcriber = {
        email: email,
        name: name
      };
      postAjax("/admin/users/subscribe", subcriber, handleSubscribe);
    }else{
      for (var key in isFieldValid) {
          if (isFieldValid.hasOwnProperty(key)) {
              if(!isFieldValid[key]){
                document.getElementById('subscribe-'+key).classList.add("input-error");
              }else{
                document.getElementById('subscribe-'+key).classList.remove("input-error");
              }
          }
      }
    }
});

function validate(email, name) {
  var validFields = {
    email: false,
    name: false
  };

  if (validateEmail(email)) {
    validFields.email = true;
  }
  if (validateName(name)) {
    validFields.name = true;
  }
  return validFields;
}

function validateEmail(email) {
  var emailRule = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRule.test(email);
}

function validateName(name) {
  var nameRule = /^[a-zA-Z-\s]+$/;
  return nameRule.test(name);
}

function handleSubscribe(status, response) {
  if(status ===200){
    document.getElementById("subscribe-form").style.display = "none";
    document.getElementById("subscribe-success").style.display = "block";
  }else{
    console.log("ERROR: " + response);
  }
}

function postAjax(url, data, callback) {
    var params = typeof data == 'string' ? data : Object.keys(data).map(
            function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
        ).join('&');

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3) { callback(xhr.status, xhr.responseText); }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
};
