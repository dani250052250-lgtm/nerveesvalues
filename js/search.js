// 🌙 Nervees Values
// Global Search System


let searchDatabase = [];






async function loadSearchDatabase(){



const categories = [


"pets",
"vehicles",
"pet_wear",
"toys",
"eggs",
"gifts"


];





for(let category of categories){



let response = await fetch(

"database/" + category + ".json"

);



let data = await response.json();




searchDatabase.push(

...data

);



}





}









function searchItems(){



let input =

document
.getElementById(
"search"
)
.value
.toLowerCase();






let results =

searchDatabase.filter(item =>



item.name
.toLowerCase()
.includes(input)



);







showSearchResults(results);



}









function showSearchResults(results){



let box =

document.getElementById(
"search-results"
);





box.innerHTML="";






results.forEach(item=>{


box.innerHTML += `



<div class="search-card"



onclick="openItem('${item.id}')">



<img

src="images/${item.category}/${item.image}"

width="80"

>




<h3>

${item.name}

</h3>




<p>

FR:

${item.values.FR || 0}

🧪

</p>



<p>

Demand:

${"⭐".repeat(item.demand)}

</p>



</div>



`;



});



}







loadSearchDatabase();
