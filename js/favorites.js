// ❤️ Nervees Values
// Favorites System


let favorites = 
JSON.parse(
localStorage.getItem("favorites")
)
||
[];






// Добавление в избранное


function addFavorite(item){


    let exists =
    favorites.find(
    fav => fav.id === item.id
    );



    if(!exists){


        favorites.push(item);



        saveFavorites();



        alert(
        "❤️ Added to favorites"
        );


    }



}








// Удаление


function removeFavorite(id){



favorites =
favorites.filter(
item=>item.id !== id
);



saveFavorites();


renderFavorites();



}







// Сохранение


function saveFavorites(){


localStorage.setItem(

"favorites",

JSON.stringify(favorites)

);


}







// Отображение


function renderFavorites(){



let box =
document.getElementById(
"favorites"
);



if(!box)

return;




box.innerHTML = "";





favorites.forEach(item=>{



box.innerHTML += `


<div class="card">


<img src="images/pets/${item.image}">



<h3>

${item.name}

</h3>



<button onclick="removeFavorite('${item.id}')">

❌ Remove

</button>



</div>



`;



});



}







// Запуск


renderFavorites();
