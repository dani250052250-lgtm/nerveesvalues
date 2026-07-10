// 📈 Nervees Values
// 30 Day Price Chart



let history =

JSON.parse(

localStorage.getItem("priceHistory")

)

||

[];







function getPetHistory(name){



return history.filter(

item => item.name === name

);


}








// Для теста берём первый предмет


let pet =
history[0];



if(pet){



document
.getElementById(
"pet-name"
)
.innerText =
pet.name;






let data =
getPetHistory(
pet.name
);





new Chart(

document
.getElementById(
"chart"
),


{


type:"line",


data:{


labels:

data.map(
x=>x.date
),



datasets:[{


label:"Value 🧪",


data:

data.map(
x=>x.new
)


}]



},



options:{


responsive:true


}



}

);



}
