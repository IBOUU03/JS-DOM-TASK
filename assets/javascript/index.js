function login() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    const infoForm = document.getElementById("info_form");
    const loginForm = document.getElementById("login_form");

    if (username === "admin" && password === "admin") {
        document.querySelector("#login_form").style.display = "none";
        document.querySelector("#info_form").style.display = "block"
        
    } else {
        document.querySelector("#result").innerHTML = "Username or password is incorrect!";
    }
}

document.querySelector("#loginBtn").addEventListener("click", function(e){
    e.preventDefault();
    login();
});

function comment(){
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let comment = document.querySelector("#comment").value;

    document.querySelector("#info_form").style.display = "none";
    document.querySelector("#userinfo").style.display = "block";

    document.querySelector("#firstnameuser span").innerHTML = firstname;
    document.querySelector("#lastnameuser span").innerHTML = lastname;
    document.querySelector("#userinfo p").innerHTML = comment;
}

document.querySelector("#commentBtn").addEventListener("click", function(e){
    e.preventDefault();
    comment();
    
});



