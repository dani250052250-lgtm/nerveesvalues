# 🌙 Nervees Values
# New Item Detector


import json
import os




DATABASE = "../database/pets.json"

SOURCE = "pets_source.json"






def load_file(path):


    if not os.path.exists(path):

        return []


    with open(

        path,

        "r",

        encoding="utf-8"

    ) as file:


        return json.load(file)








def save_file(path,data):


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








database = load_file(DATABASE)

new_list = load_file(SOURCE)







existing_ids = set()



for item in database:

    existing_ids.add(
        item["id"]
    )







added = 0






for item in new_list:


    if item["id"] not in existing_ids:


        database.append({


            "id":
            item["id"],


            "name":
            item["name"],


            "image":
            item["image"],


            "values":{


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


        })



        added += 1





save_file(

DATABASE,

database

)





print(

"New items added:",

added

)
