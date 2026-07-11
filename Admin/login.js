// 🌙 Nervees Values
// Secure Admin Login



async function login(){



let password =

document
.getElementById(
"password"
)
.value;






let response = await fetch(

"http://localhost:5000/login",

{


method:"POST",


headers:{


"Content-Type":

"application/json"


},


body:JSON.stringify({


password:password


})


}

);








let result = await response.json();






if(result.status==="success"){



window.location.href=

"index.html";



}

else{


alert(
"❌ Wrong password"
);


}



}
