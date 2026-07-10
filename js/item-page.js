// 🌙 Nervees Values
// Public Item Page


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

            "database/" + category + ".json"

        );



        let data = await response.json();



        allItems.push(
            ...data
        );


    }



}









function openItem(id){



    let item = allItems.find(

        x => x.id === id

    );



    if(!item)
    return;





    let box = document.getElementById(
        "item-page"
    );





    box.innerHTML = `



<div class="item-card">



<h1>

${item.name}

</h1>





<img

src="images/${item.category}/${item.image}"

width="180"

>







<h2>

🧪 Values

</h2>




<div class="values">



${Object.keys(item.values).map(version=>`



<p>


<b>${version}</b>:

${item.values[version] || 0}



</p>



`).join("")}



</div>







<h2>

Demand

</h2>



<p>

${"⭐".repeat(item.demand)}

</p>






<h2>

📈 Price History

</h2>



<div id="history-${item.id}">

Loading...

</div>






</div>



`;





showItemHistory(item);

}





function showItemHistory(item){



let history =

JSON.parse(

localStorage.getItem(
"priceHistory"
)

)

||

[];






let itemHistory =

history.filter(

x=>x.name===item.name

);





let box = document.getElementById(

"history-"+item.id

);





if(itemHistory.length===0){


box.innerHTML=

"No changes yet";


return;


}





box.innerHTML="";





itemHistory
.slice()
.reverse()
.forEach(change=>{


box.innerHTML += `


<p>

${change.version}

:

${change.old}

→

${change.new}

🧪

<br>

${change.date}

</p>


`;



});



}






loadItems();
