// 🌙 Nervees Values Admin
// Full Version Editor


let items = [];

let currentCategory = "pets";





async function loadAdmin(category = "pets"){


    currentCategory = category;



    const response = await fetch(

        "../database/" + category + ".json"

    );



    items = await response.json();



    renderAdmin(items);



}









function renderAdmin(list){


    const box = document.getElementById(
        "admin-items"
    );



    if(!box) return;



    box.innerHTML = "";





    list.forEach((item,index)=>{



        box.innerHTML += `



<div class="admin-card">



<h2>

${item.name}

</h2>




<img

src="../images/${item.category}/${item.image}"

width="120"

>




<h3>
Versions 🧪
</h3>





<div class="versions">


${Object.keys(item.values).map(version => `



<div class="value-row">


<label>

${version}

</label>



<input

id="${version}-${index}"

value="${item.values[version] || 0}"

type="number"

>


</div>



`).join("")}



</div>







<h3>

Demand

</h3>




<select id="demand-${index}">



<option value="1">
★☆☆☆☆
</option>


<option value="2">
★★☆☆☆
</option>


<option value="3">
★★★☆☆
</option>


<option value="4">
★★★★☆
</option>


<option value="5">
★★★★★
</option>


</select>






<br><br>




<button onclick="saveItem(${index})">

💾 SAVE

</button>





</div>




`;



    });



}









async function saveItem(index){



let item = items[index];




let oldValues = 
JSON.parse(
JSON.stringify(item.values)
);






Object.keys(item.values).forEach(version=>{



let input = document.getElementById(

version+"-"+index

);




if(input){


item.values[version] =
Number(input.value);



}



});







item.demand = Number(

document.getElementById(

"demand-"+index

).value

);








// История изменений


Object.keys(item.values).forEach(version=>{


if(
oldValues[version]
!==
item.values[version]
){



addHistory(

item,

version,

oldValues[version],

item.values[version]

);



}



});








await fetch(

"http://localhost:5000/save",

{


method:"POST",


headers:{


"Content-Type":
"application/json"


},


body:JSON.stringify(item)



}

);






alert(

"✅ Saved successfully"

);



}









function addHistory(

item,

version,

oldValue,

newValue

){



let history =

JSON.parse(

localStorage.getItem(
"priceHistory"
)

)

||

[];





history.push({


name:item.name,


version:version,


old:oldValue,


new:newValue,


date:

new Date()
.toLocaleDateString()



});







localStorage.setItem(

"priceHistory",

JSON.stringify(history)

);



}







// Старт

loadAdmin();
