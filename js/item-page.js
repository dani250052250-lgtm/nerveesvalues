// 🌙 Nervees Values
// Item Page


let allItems = [];







async function loadItems(){



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

"database/"+category+".json"

);



let data = await response.json();



allItems.push(
...data
);



}





showItem();

}









function showItem(){



let params =

new URLSearchParams(
window.location.search
);



let id = params.get(
"id"
);





let item =

allItems.find(

x=>x.id===id

);





let box =

document.getElementById(
"item-page"
);






if(!item){


box.innerHTML =

"❌ Item not found";


return;


}








box.innerHTML = `




<div class="item-card">


<h1>

${item.name}

</h1>





<img

src="images/${item.category}/${item.image}"

width="200"

>







<h2>

🧪 Values

</h2>






${Object.keys(item.values).map(version=>`


<div class="value-row">


<b>

${version}

</b>


<span>

${item.values[version] || 0}

🧪

</span>


</div>


`).join("")}








<h2>

Demand

</h2>



<p>

${"⭐".repeat(item.demand)}

</p>





<h2>

📈 History

</h2>



<canvas id="priceChart">

</canvas>



</div>




`;





createChart(item);

}








function createChart(item){



let history =

JSON.parse(

localStorage.getItem(
"priceHistory"
)

)

||

[];





let data =

history.filter(

x=>x.name===item.name

);





if(data.length===0)

return;







new Chart(

document.getElementById(
"priceChart"
),

{


type:"line",


data:{


labels:data.map(
x=>x.date
),



datasets:[{


label:"Value 🧪",


data:data.map(
x=>x.new
)


}]



}



}



);




}









loadItems();
