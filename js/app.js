async function loadPets(){


const response = await fetch(
"database/pets.json"
);


const pets = await response.json();


const box =
document.getElementById("pets");


box.innerHTML="";



pets.forEach(pet=>{


box.innerHTML += `

<div class="card">

<img src="images/pets/${pet.image}">


<h2>${pet.name}</h2>


<p>
FR: ${pet.values.FR}
</p>


<p>
NFR: ${pet.values.NFR}
</p>


<p>
Demand:
${"⭐".repeat(pet.demand)}
</p>


</div>


`;


});


}



loadPets();
