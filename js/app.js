// 🌙 Nervees Values
// Main Application


let allItems = [];

let currentCategory = "pets";




// Все базы данных

const databases = {

    pets: "database/pets.json",

    vehicles: "database/vehicles.json",

    pet_wear: "database/pet_wear.json",

    toys: "database/toys.json",

    eggs: "database/eggs.json",

    gifts: "database/gifts.json"

};





// Названия категорий

const categoryNames = {

    pets: "🐾 Pets",

    vehicles: "🚗 Vehicles",

    pet_wear: "👒 Pet Wear",

    toys: "🧸 Toys",

    eggs: "🥚 Eggs",

    gifts: "🎁 Gifts"

};







// Загрузка базы


async function loadCategory(category){


    currentCategory = category;


    try {


        const response =
        await fetch(databases[category]);



        const data =
        await response.json();



        allItems = data;



        displayItems(allItems);



        document
        .getElementById("category-title")
        .innerText =
        categoryNames[category];



    }


    catch(error){


        console.error(
        "Database error:",
        error
        );


    }



}








// Создание карточек


function displayItems(items){


    const container =
    document.getElementById("items");



    container.innerHTML = "";




    items.forEach(item=>{



        let version = "FR";



        let price =
        item.values?.[version] ?? 0;





        let demand =
        createDemand(item.demand);





        container.innerHTML += `


        <div class="card">



            <img src="
            images/${currentCategory}/${item.image}
            ">




            <h3>
            ${item.name}
            </h3>




            <p class="value">

            🧪 ${price}

            </p>





            <span class="badge">

            ${version}

            </span>




            <p>

            Demand:
            ${demand}

            </p>



            <button onclick='addItem(${JSON.stringify(item)})'>

            ⚖️ Add

            </button>




        </div>


        `;



    });



}







// Demand ⭐


function createDemand(value){


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







// Первый запуск


loadCategory("pets");
