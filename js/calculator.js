// ⚖️ Nervees Values Trade Calculator


let yourTrade = [];

let theirTrade = [];





// Добавление предмета


function addItem(item){


    let side = prompt(
        "Where add?\n1 - Your Offer\n2 - Their Offer"
    );



    if(side === "1"){


        yourTrade.push(item);


    }



    if(side === "2"){


        theirTrade.push(item);


    }



    updateTrade();



}








// Получение цены


function getItemValue(item){



    // По умолчанию FR

    let version = "FR";



    return item.values?.[version] || 0;


}







// Подсчёт


function calculate(items){


    let total = 0;



    items.forEach(item=>{


        total += getItemValue(item);


    });



    return total;


}







// Обновление окна


function updateTrade(){



    let yourTotal =
    calculate(yourTrade);



    let theirTotal =
    calculate(theirTrade);





    document
    .getElementById("your-total")
    .innerText =
    yourTotal;




    document
    .getElementById("their-total")
    .innerText =
    theirTotal;






    let result =
    document.getElementById("trade-result");





    if(yourTotal > theirTotal){


        result.innerHTML =
        "🔴 You are Overpaying";


    }



    else if(yourTotal < theirTotal){


        result.innerHTML =
        "🟢 You Win";


    }



    else{


        result.innerHTML =
        "⚖️ Fair Trade";


    }



    showTradeItems();



}








// Показ предметов


function showTradeItems(){



let yourBox =
document.getElementById("your-items");



let theirBox =
document.getElementById("their-items");




yourBox.innerHTML = "";

theirBox.innerHTML = "";





yourTrade.forEach(item=>{


yourBox.innerHTML += `

<div>

${item.name}

🧪 ${getItemValue(item)}

</div>

`;


});







theirTrade.forEach(item=>{


theirBox.innerHTML += `

<div>

${item.name}

🧪 ${getItemValue(item)}

</div>

`;


});



}
