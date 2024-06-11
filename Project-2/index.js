$("#burger,nav ul li").on("click",function(){
    $("#header-wrapper").toggleClass("open");
    $("nav ul").toggleClass("open");
});

//email validation using REGEX

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var email = document.getElementById("email").style.color = "white";

email.addEventListner('keypress',(e) => {
    let validation = emailRegex.test(email.value);

    if(email.value !== " "){
        if(validation){
            email.className = "valid";
        }else{
            email.className = "invalid";
        } 
    }else{
          email.className=" ";  
        }
    }
);

window.addEventListener('scroll',function(){
    document.body.classList[window.scrollY > 220 ? 'add' : 'remove']('scrolled');
});

