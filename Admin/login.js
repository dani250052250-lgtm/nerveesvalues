// 🔐 Admin Login System


const ADMIN_PASSWORD = "Eee123321EeeNervees";





function login(){



let password =
document
.getElementById("password")
.value;





if(password === ADMIN_PASSWORD){


localStorage.setItem(

"admin_access",

"true"

);



window.location.href =
"index.html";



}



else{


alert(
"❌ Wrong password"
);


}


}
