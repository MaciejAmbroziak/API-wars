
let button = document.getElementById('button');

button.addEventListener('click', validatePassword);


function validatePassword(){
    let password1 = document.getElementById("exampleInputPassword1");
    let password2 = document.getElementById('exampleInputPassword2');
    if (password1.value === password2.value){
        window.alert("You are registered");
    }else{
        window.alert("Passwords must agree");
    }
}