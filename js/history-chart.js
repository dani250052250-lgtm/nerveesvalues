// 📈 Nervees Values
// Price History Chart


function showHistoryChart(itemId){


    let history = 
    JSON.parse(
    localStorage.getItem("history")
    )
    ||
    [];



    let itemHistory =
    history.filter(
    h => h.id === itemId
    );



    if(itemHistory.length === 0){


        alert(
        "No price history yet"
        );


        return;


    }




    let values =
    itemHistory.map(
    h => h.new
    );



    let dates =
    itemHistory.map(
    h => h.date
    );




    drawChart(
        dates,
        values
    );



}







function drawChart(labels, data){



    let canvas =
    document.getElementById(
    "priceChart"
    );



    if(!canvas)

    return;




    new Chart(
    canvas,
    {

        type:"line",


        data:{


            labels:labels,


            datasets:[{

                label:"Value 🧪",


                data:data


            }]


        },


        options:{


            responsive:true


        }


    });



}
