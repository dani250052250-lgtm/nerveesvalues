// 🌙 Nervees Values
// Category Manager


let currentCategory = "pets";





const categories = [

    {
        id:"pets",
        name:"🐾 Pets"
    },

    {
        id:"vehicles",
        name:"🚗 Vehicles"
    },

    {
        id:"pet_wear",
        name:"👒 Pet Wear"
    },

    {
        id:"toys",
        name:"🧸 Toys"
    },

    {
        id:"eggs",
        name:"🥚 Eggs"
    },

    {
        id:"gifts",
        name:"🎁 Gifts"
    }

];







function loadCategories(){


    let box =
    document.getElementById(
        "categories"
    );



    if(!box)
    return;



    box.innerHTML="";



    categories.forEach(cat=>{


        box.innerHTML += `


        <button onclick="changeCategory('${cat.id}')">

        ${cat.name}

        </button>


        `;


    });


}







function changeCategory(category){


    currentCategory = category;


    loadItems(
        category
    );


}








async function loadItems(category){


    let response =
    await fetch(
        "../database/"
        +
        category
        +
        ".json"
    );



    let items =
    await response.json();



    renderAdmin(items);



}








loadCategories();
