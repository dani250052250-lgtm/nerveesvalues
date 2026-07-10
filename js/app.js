// 🌙 Nervees Values
// Main App Controller


let currentItems = [];





async function loadCategory(category){


    let response = await fetch(

        "database/" 
        + category 
        + ".json"

    );



    currentItems = await response.json();



    showItems(currentItems);



}









function showItems(items){



    let box =

    document.getElementById(
        "items"
    );




    box.innerHTML = "";







    items.forEach(item=>{


        box.innerHTML += `



<div class="item-card

${item.values.MFR > 0 ? "mfr" : ""}

${item.values.NFR > 0 ? "nfr" : ""}

"



onclick="openItem('${item.id}')"

>




<img

src="images/${item.category}/${item.image}"

>




<h2>

${item.name}

</h2>





<p>

FR:

${item.values.FR || 0}

🧪

</p>





<p>

NFR:

${item.values.NFR || 0}

🧪

</p>





<p>

MFR:

${item.values.MFR || 0}

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









async function loadAll(){



let categories = [


"pets",

"vehicles",

"pet_wear",

"toys",

"eggs",

"gifts"


];




currentItems = [];




for(let category of categories){



let response = await fetch(

"database/"+category+".json"

);



let data = await response.json();




currentItems.push(

...data

);



}




showItems(
currentItems
);



}








// стартовая загрузка

loadAll();
