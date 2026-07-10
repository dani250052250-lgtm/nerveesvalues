// 🔍 Nervees Values
// Advanced Search System


let searchTimeout;




const searchInput =
document.getElementById("search");





searchInput.addEventListener(
"input",
function(){


clearTimeout(searchTimeout);



let text =
this.value
.toLowerCase()
.trim();




searchTimeout =
setTimeout(()=>{


performSearch(text);



},150);



});







function performSearch(text){



if(text.length === 0){


displayItems(allItems);


return;


}







let result =
allItems.filter(item=>{


let name =
item.name
.toLowerCase();




return (

name.includes(text)

);



});







displayItems(result);



}
