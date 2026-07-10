// 🌙 Nervees Values
// Global Search


let searchItemsList = [];






async function loadSearch(){



let categories = [


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



searchItemsList.push(

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






let box =

document.getElementById(
"search-results"
);





box.innerHTML="";







if(input.length < 2){

return;

}






let result =

searchItemsList.filter(item =>


item.name

.toLowerCase()

.includes(input)


);








result.slice(0,10).forEach(item=>{



box.innerHTML += `




<div class="search-card"

onclick="openItem('${item.id}')"

>



<img

src="images/${item.category}/${item.image}"

width="70"

>




<div>


<h3>

${item.name}

</h3>



<p>

FR:

${item.values.FR || 0}

🧪

</p>



</div>



</div>



`;



});




}








loadSearch();
