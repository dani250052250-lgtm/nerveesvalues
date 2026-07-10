// 🌙 Nervees Values Admin Search


let allAdminItems = [];





function setAdminItems(items){


    allAdminItems = items;


    renderAdmin(items);


}








function searchAdmin(){


    let text =

    document
    .getElementById(
        "adminSearch"
    )
    .value
    .toLowerCase();






    let filtered =

    allAdminItems.filter(item =>


        item.name
        .toLowerCase()
        .includes(text)


    );





    renderAdmin(filtered);



}
