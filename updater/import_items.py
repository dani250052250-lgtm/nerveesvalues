# 🌙 Nervees Values
# Automatic Item Importer


import json
import os




DATABASE = "../database"





def load(category):


    path = os.path.join(

        DATABASE,

        category + ".json"

    )



    if not os.path.exists(path):


        return []



    with open(

        path,

        "r",

        encoding="utf-8"

    ) as file:


        return json.load(file)








def save(category, data):


    path = os.path.join(

        DATABASE,

        category + ".json"

    )



    with open(

        path,

        "w",

        encoding="utf-8"

    ) as file:


        json.dump(

            data,

            file,

            indent=4,

            ensure_ascii=False

        )









def generate_item(

    item_id,

    name,

    image,

    category

):


    return {


        "id": item_id,


        "name": name,


        "image": image,


        "category": category,



        "values": {


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


        },


        "demand":1,


        "history":[]


    }








def add_new_item(item):


    database = load(
        item["category"]
    )



    for old in database:


        if old["id"] == item["id"]:


            print(

            "Already exists:",

            item["name"]

            )


            return





    database.append(item)



    save(

        item["category"],

        database

    )



    print(

    "Added:",

    item["name"]

    )









# Пример нового питомца


new_pet = generate_item(

    "example_dragon",

    "Example Dragon",

    "example-dragon.png",

    "pets"

)





add_new_item(new_pet)
