# 🌙 Nervees Values
# Database Builder


import json
import os



categories = [

    "pets",
    "vehicles",
    "pet_wear",
    "toys",
    "eggs",
    "gifts"

]





versions = {


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







def create_category(name):


    path = "../database/" + name + ".json"



    if not os.path.exists(path):


        with open(

            path,

            "w",

            encoding="utf-8"

        ) as file:


            json.dump(

                [],

                file,

                indent=4,

                ensure_ascii=False

            )



        print(
            "Created:",
            name
        )



    else:


        print(
            "Exists:",
            name
        )








def create_all():


    for category in categories:


        create_category(category)






create_all()


print(
"✅ Database ready"
)
