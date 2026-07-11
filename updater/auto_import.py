# 🌙 Nervees Values
# Auto Database Importer


import json
import os





DATABASE = "../database"





CATEGORIES = [

"pets",
"vehicles",
"pet_wear",
"toys",
"eggs",
"gifts"

]






DEFAULT_VALUES = {


"N":0,

"R":0,

"F":0,

"FR":0,

"NR":0,

"NF":0,

"NFR":0,

"M":0,

"MR":0,

"MF":0,

"MFR":0

}







def create_database():



    os.makedirs(
        DATABASE,
        exist_ok=True
    )




    for category in CATEGORIES:



        file = DATABASE + "/" + category + ".json"




        if not os.path.exists(file):



            with open(
                file,
                "w",
                encoding="utf-8"
            ) as f:



                json.dump(
                    [],
                    f,
                    indent=4
                )



            print(
                "Created:",
                file
            )







def add_item(
    category,
    item_id,
    name
):



    file = DATABASE + "/" + category + ".json"




    with open(
        file,
        "r",
        encoding="utf-8"
    ) as f:


        items=json.load(f)







    exists = any(

        x["id"] == item_id

        for x in items

    )





    if exists:


        return






    items.append({


        "id":item_id,


        "name":name,


        "category":category,


        "image":item_id+".png",


        "values":DEFAULT_VALUES,


        "demand":3



    })






    with open(
        file,
        "w",
        encoding="utf-8"
    ) as f:



        json.dump(
            items,
            f,
            indent=4,
            ensure_ascii=False
        )





    print(
        "Added:",
        name
    )







create_database()
