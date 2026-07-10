// 📈 Nervees Values History


function createHistory(item, oldValue, newValue){


    let history =
    JSON.parse(
    localStorage.getItem("history")
    )
    ||
    [];



    history.push({

        id:item.id,

        name:item.name,

        date:new Date()
        .toLocaleDateString(),

        old:oldValue,

        new:newValue

    });



    localStorage.setItem(

    "history",

    JSON.stringify(history)

    );


}






function getHistory(){


return JSON.parse(

localStorage.getItem("history")

)

||
[];

}
