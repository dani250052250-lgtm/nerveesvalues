// 🌙 Nervees Values
// Main App System


let allItems = [];

let currentCategory = "pets";



const databases = {

    pets: "database/pets.json",

    vehicles: "database/vehicles.json",

    pet_wear: "database/pet_wear.json",

    toys: "database/toys.json",

    eggs: "database/eggs.json",

    gifts: "database/gifts.json"

};





const categoryNames = {

    pets: "🐾 Pets",

    vehicles: "🚗 Vehicles",

    pet_wear: "👒 Pet Wear",

    toys: "🧸 Toys",

    eggs: "🥚 Eggs",

    gifts: "🎁 Gifts"

};





// Загрузка категории


async function loadCategory(category){


    currentCategory = category;


    try{


        const response =
        await fetch(databases[category]);



        allItems =
        await response.json();



        displayItems(allItems);



        document
        .getElementById("category-title")
        .innerText =
        categoryNames[category];


    }


    catch(error){


        console.log(
        "Database missing:",
        category
        );


    }


}







// Создание карточек


function displayItems(items){


    const container =
    document.getElementById("items");


    container.innerHTML = "";




    items.forEach((item,index)=>{


        let defaultVersion = "FR";


        let value =
        item.values?.[defaultVersion] || 0;



        container.innerHTML += `


        <div class="card">


        <img src="
        images/${currentCategory}/${item.image}
        ">



        <h3>

        ${item.name}

        </h3>




        <p class="value">

        🧪 ${value}

        </p>




        <select id="version-${index}">


        <option>N</option>

        <option>R</option>

        <option>F</option>

        <option selected>FR</option>


        <option>NR</option>

        <option>NF</option>

        <option>NFR</option>


        <option>M</option>

        <option>MR</option>

        <option>MF</option>

        <option>MFR</option>


        </select>




        <button onclick="addToCalculator(${index})">

        ⚖️ Add

        </button>




        <span class="badge">

        ${defaultVersion}

        </span>




        <p>

        Demand:

        ${showDemand(item.demand)}

        </p>



        </div>



        `;


    });


}








// Добавление в калькулятор


function addToCalculator(index){



    let item =
    allItems[index];



    let select =
    document.getElementById(
    "version-" + index
    );



    let version =
    select.value;



    let selected = {


        ...item,


        selectedVersion: version


    };



    addItem(selected);


}









// Demand


function showDemand(value){


    if(value === 3)

    return "★★★";


    if(value === 2)

    return "★★☆";


    return "★☆☆";


}







// Категории


document
.querySelectorAll(".categories button")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


loadCategory(
button.dataset.category
);


});


});






// Поиск


document
.getElementById("search")
.addEventListener(
"input",
function(){


let text =
this.value.toLowerCase();



let result =
allItems.filter(item=>


item.name
.toLowerCase()
.includes(text)



);



displayItems(result);



});







// Запуск


loadCategory("pets");
