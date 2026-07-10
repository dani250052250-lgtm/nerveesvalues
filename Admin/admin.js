// 🔐 Nervees Values Admin
// With Price History


let pets = [];






async function loadAdmin(){


    const response =
    await fetch("../database/pets.json");



    pets =
    await response.json();



    renderAdmin(pets);


}









function renderAdmin(items){


const box =
document.getElementById(
"admin-items"
);



box.innerHTML="";





items.forEach((item,index)=>{


box.innerHTML += `


<div class="admin-card">


<h2>

${item.name}

</h2>



<img src="../images/pets/${item.image}" width="100">



<p>FR 🧪</p>


<input

id="FR-${index}"

value="${item.values.FR || 0}"

>



<p>NFR 🧪</p>


<input

id="NFR-${index}"

value="${item.values.NFR || 0}"

>



<p>MFR 🧪</p>


<input

id="MFR-${index}"

value="${item.values.MFR || 0}"

>



<p>Demand</p>


<select id="demand-${index}">


<option value="1">

★☆☆

</option>


<option value="2">

★★☆

</option>


<option value="3">

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









async function saveItem(index){



let item =
pets[index];





let oldFR =
item.values.FR;





let newFR =
Number(

document
.getElementById(
"FR-"+index
)
.value

);





if(oldFR !== newFR){


    addHistory(

        item,

        oldFR,

        newFR

    );


}







item.values.FR =
newFR;



item.values.NFR =
Number(

document
.getElementById(
"NFR-"+index
)
.value

);



item.values.MFR =
Number(

document
.getElementById(
"MFR-"+index
)
.value

);





item.demand =
Number(

document
.getElementById(
"demand-"+index
)
.value

);






await fetch(

"http://localhost:5000/save",

{


method:"POST",


headers:{


"Content-Type":
"application/json"


},


body:
JSON.stringify(item)


}


);





alert(
"✅ Saved + History Updated"
);



}






loadAdmin();
