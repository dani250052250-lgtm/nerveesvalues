// ⚖️ Nervees Values
// Trade Calculator System


let yourTrade = [];

let theirTrade = [];





// Добавление предмета


function addItem(item){


    let side = prompt(

        "Add item:\n\n1 - Your Offer\n2 - Their Offer"

    );



    if(side === "1"){


        yourTrade.push(item);


    }


    else if(side === "2"){


        theirTrade.push(item);


    }



    updateCalculator();


}








// Получение выбранной цены


function getItemValue(item){



    let version =
    item.selectedVersion || "FR";



    return (
        item.values?.[version]
        ||
        0
    );



}







// Подсчёт


function calculateTrade(items){


    let total = 0;



    items.forEach(item=>{


        total +=
        getItemValue(item);



    });



    return total;


}







// Обновление калькулятора


function updateCalculator(){



    let yourTotal =
    calculateTrade(yourTrade);



    let theirTotal =
    calculateTrade(theirTrade);





    document
    .getElementById("your-total")
    .innerText =
    yourTotal;




    document
    .getElementById("their-total")
    .innerText =
    theirTotal;






    let result =
    document.getElementById(
    "trade-result"
    );





    if(yourTotal > theirTotal){


        result.innerHTML =
        "🔴 You are overpaying";


    }


    else if(yourTotal < theirTotal){


        result.innerHTML =
        "🟢 You are winning";


    }


    else{


        result.innerHTML =
        "⚖️ Fair Trade";


    }




    renderTrade();


}








// Отображение обмена


function renderTrade(){



    let yourBox =
    document.getElementById(
    "your-items"
    );



    let theirBox =
    document.getElementById(
    "their-items"
    );



    yourBox.innerHTML = "";

    theirBox.innerHTML = "";





    yourTrade.forEach(
    (item,index)=>{


        yourBox.innerHTML += `


        <div class="trade-item">

        ${item.name}

        <br>

        ${item.selectedVersion}

        🧪 ${getItemValue(item)}


        <button onclick="removeYour(${index})">

        ❌

        </button>


        </div>


        `;


    });








    theirTrade.forEach(
    (item,index)=>{


        theirBox.innerHTML += `


        <div class="trade-item">


        ${item.name}

        <br>

        ${item.selectedVersion}

        🧪 ${getItemValue(item)}



        <button onclick="removeTheir(${index})">

        ❌

        </button>


        </div>


        `;


    });



}







// Удаление


function removeYour(index){


    yourTrade.splice(index,1);


    updateCalculator();


}



function removeTheir(index){


    theirTrade.splice(index,1);


    updateCalculator();


}
