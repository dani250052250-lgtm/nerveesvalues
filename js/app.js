let allItems = [];

let currentCategory = "pets";


// Файлы базы

const databases = {

    pets: "database/pets.json",

    vehicles: "database/vehicles.json",

    pet_wear: "database/pet_wear.json",

    toys: "database/toys.json",

    eggs: "database/eggs.json",

    gifts: "database/gifts.json"

};




// Загрузка базы


async function loadDatabase(category){


    currentCategory = category;


    const response = await fetch(databases[category]);


    const data = await response.json();


    allItems = data;


    displayItems(allItems);


    document.getElementById("title").innerText =
    getCategoryName(category);



}




// Названия разделов


function getCategoryName(category){


    const names = {


        pets:"🐾 Pets",

        vehicles:"🚗 Vehicles",

        pet_wear:"👒 Pet Wear",

        toys:"🧸 Toys",

        eggs:"🥚 Eggs",

        gifts:"🎁 Gifts"


    };


    return names[category];


}





// Вывод карточек


function displayItems(items){



const container =
document.getElementById("items");



container.innerHTML="";



items.forEach(item=>{


let version = "FR";


let price =
item.values?.[version] || 0;



container.innerHTML += `


<div class="card">


<img src="images/${currentCategory}/${item.image}">


<h3>
${item.name}
</h3>



<p class="value">

🧪 ${price} RP

</p>



<span class="badge">

${version}

</span>



<p>

Demand:
${showDemand(item.demand)}

</p>



</div>


`;



});



}





// Demand


function showDemand(value){


if(value===3)

return "★★★";


if(value===2)

return "★★☆";


return "★☆☆";


}





// Кнопки категорий



document.querySelectorAll("nav button")
.forEach(button=>{


button.addEventListener("click",()=>{


loadDatabase(
button.dataset.category
);


});


});





// Поиск


document
.getElementById("search")
.addEventListener("input",function(){



const text =
this.value.toLowerCase();



const result =
allItems.filter(item=>

item.name
.toLowerCase()
.includes(text)

);



displayItems(result);



});






// Стартовая загрузка


loadDatabase("pets");
