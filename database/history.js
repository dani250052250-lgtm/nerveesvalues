// 📈 Nervees Values
// Admin Price History


let priceHistory = 
JSON.parse(
localStorage.getItem("priceHistory")
)
||
[];





function addHistory(
item,
oldPrice,
newPrice
){



let change = {


    id:item.id,


    name:item.name,


    old:oldPrice,


    new:newPrice,


    date:
    new Date()
    .toLocaleDateString()


};




priceHistory.push(change);




localStorage.setItem(

"priceHistory",

JSON.stringify(priceHistory)

);



}








function showHistory(){



let box =
document.getElementById(
"history"
);



if(!box)

return;




box.innerHTML="";





priceHistory
.slice()
.reverse()
.forEach(item=>{


box.innerHTML += `


<div class="admin-card">


<h3>

${item.name}

</h3>


<p>

${item.old} 🧪 → ${item.new} 🧪

</p>


<small>

${item.date}

</small>


</div>


`;



});



}







showHistory();
