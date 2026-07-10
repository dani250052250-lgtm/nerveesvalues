// 🔐 Nervees Values Admin Panel


let pets = [];

let selectedItem = null;





// Загружаем базу питомцев


async function loadAdmin(){


const response = 
await fetch("../database/pets.json");



pets =
await response.json();



renderAdmin(pets);



}







// Отображение списка


function renderAdmin(items){


const box =
document.getElementById("admin-items");



box.innerHTML = "";





items.forEach((item,index)=>{



box.innerHTML += `


<div class="admin-card">


<h2>

${item.name}

</h2>



<img 
src="../images/pets/${item.image}"
width="100"
>



<h3>Values 🧪</h3>



<label>N</label>

<input 
id="N-${index}"
value="${item.values.N || 0}"
>



<label>R</label>

<input 
id="R-${index}"
value="${item.values.R || 0}"
>



<label>F</label>

<input 
id="F-${index}"
value="${item.values.F || 0}"
>



<label>FR</label>

<input 
id="FR-${index}"
value="${item.values.FR || 0}"
>




<label>NFR</label>

<input 
id="NFR-${index}"
value="${item.values.NFR || 0}"
>




<label>MFR</label>

<input 
id="MFR-${index}"
value="${item.values.MFR || 0}"
>





<h3>Demand</h3>


<select id="demand-${index}">


<option value="1"
${item.demand===1?"selected":""}>

★☆☆

</option>



<option value="2"
${item.demand===2?"selected":""}>

★★☆

</option>



<option value="3"
${item.demand===3?"selected":""}>

★★★

</option>


</select>





<button onclick="saveItem(${index})">

💾 SAVE

</button>



</div>



`;



});



}








// Сохранение


function saveItem(index){



let item =
pets[index];





item.values.N =
Number(
document.getElementById(
"N-"+index
).value
);



item.values.R =
Number(
document.getElementById(
"R-"+index
).value
);



item.values.F =
Number(
document.getElementById(
"F-"+index
).value
);



item.values.FR =
Number(
document.getElementById(
"FR-"+index
).value
);



item.values.NFR =
Number(
document.getElementById(
"NFR-"+index
).value
);



item.values.MFR =
Number(
document.getElementById(
"MFR-"+index
).value
);





item.demand =
Number(
document.getElementById(
"demand-"+index
).value
);




console.log(
"Updated:",
item
);



alert(
"✅ Saved (demo)"
);



}









// Поиск


document
.getElementById("admin-search")
.addEventListener(
"input",
function(){



let text =
this.value.toLowerCase();




let result =
pets.filter(item=>
