const submit = document.getElementById('subscribe-submit');

submit.addEventListener("click", function(){
    const email = document.getElementById('subscribe-email').value;
    const name = document.getElementById('subscribe-name').value;

    if(email === "" || name === ""){
        alert("Enter valid information!");
    }else{
        alert("Submitting form with email: " + email + ". name: " + name);
    }
});
