// 🌙 Nervees Values
// Trade Calculator



let items=[];


let left=[];

let right=[];








async function loadCalc(){


let categories=[


"pets",
"vehicles",
"pet_wear",
"toys",
"eggs",
"gifts"


];




for(let category of categories){


let response = await fetch(

"database/"+category+".json"

);



let data = await response.json();



items.push(
...data
);



}


}





function searchLeft(){


searchSide(
"leftSearch",
"leftResults",
left

);


}






function searchRight(){


searchSide(
"rightSearch",
"rightResults",
right

);


}








function searchSide(input,result,side){



let text=document

.getElementById(input)

.value

.toLowerCase();




let box=document

.getElementById(result);




box.innerHTML="";





items

.filter(x=>

x.name

.toLowerCase()

.includes(text)

)

.slice(0,5)

.forEach(item=>{


box.innerHTML += `



<button onclick="addItem('${item.id}', side)">

${item.name}

FR:
${item.values.FR}

</button>


`;



});



}







function addItem(id,side){



let item=

items.find(
x=>x.id===id
);





if(side==="left"){

left.push(item);

}

else{

right.push(item);

}





calculate();

}








function getValue(list){


let total=0;


list.forEach(item=>{


total +=

item.values.FR || 0;


});


return total;


}









function calculate(){


let a=getValue(left);


let b=getValue(right);



let result=document

.getElementById(
"tradeResult"
);





if(a>b){


result.innerHTML=

"🟢 You Win";


}


else if(a<b){


result.innerHTML=

"🔴 You Lose";


}


else{


result.innerHTML=

"🟡 Fair Trade";


}



}








loadCalc();
