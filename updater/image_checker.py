# 🌙 Nervees Values
# Image Checker


import json
import os





DATABASE = "../database"

IMAGES = "../images"






categories = [

"pets",

"vehicles",

"pet_wear",

"toys",

"eggs",

"gifts"

]







def check_images(category):


    file = DATABASE + "/" + category + ".json"



    if not os.path.exists(file):

        return





    with open(

        file,

        "r",

        encoding="utf-8"

    ) as f:


        items = json.load(f)







    folder = IMAGES + "/" + category





    os.makedirs(

        folder,

        exist_ok=True

    )






    missing = 0






    for item in items:



        image = item["image"]



        path = folder + "/" + image






        if not os.path.exists(path):



            print(

            "Missing image:",

            category,

            image

            )



            missing += 1







    print(

        category,

        "missing:",

        missing

    )








for category in categories:


    check_images(category)




print(

"✅ Image check complete"

)
