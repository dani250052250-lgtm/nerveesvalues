# 🌙 Nervees Values Database Updater
# Добавление новых предметов без удаления старых


import json
import os



DATABASE_PATH = "../database"






def load_database(category):


    file = os.path.join(

        DATABASE_PATH,

        category + ".json"

    )



    if not os.path.exists(file):

        return []



    with open(

        file,

        "r",

        encoding="utf-8"

    ) as f:


        return json.load(f)








def save_database(category, data):


    file = os.path.join(

        DATABASE_PATH,

        category + ".json"

    )



    with open(

        file,

        "w",

        encoding="utf-8"

    ) as f:


        json.dump(

            data,

            f,

            indent=4,

            ensure_ascii=False

        )








def add_item(category, item):


    database = load_database(category)



    exists = False



    for old in database:


        if old["id"] == item["id"]:


            exists = True


            break





    if not exists:


        database.append(item)


        save_database(
            category,
            database
        )


        print(
            "Added:",
            item["name"]
        )


    else:


        print(
            "Already exists:",
            item["name"]
        )








# Тестовый пример


new_pet = {


    "id": "example_pet",


    "name": "Example Pet",


    "image": "example.png",


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






add_item(

    "pets",

    new_pet

)
