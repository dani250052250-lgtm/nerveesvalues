# 🌙 Nervees Values
# Auto Generator


import json
import os



ROOT = ".."



DATABASE = ROOT + "/database"

IMAGES = ROOT + "/images"





CATEGORIES = [

"pets",
"vehicles",
"pet_wear",
"toys",
"eggs",
"gifts"

]






def generate():


    for category in CATEGORIES:



        file = DATABASE + "/" + category + ".json"



        if not os.path.exists(file):

            continue






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






        for item in items:



            image = item.get(
                "image",
                item["id"]+".png"
            )



            item["image"] = image



            image_path = folder + "/" + image






            if not os.path.exists(image_path):


                open(
                    image_path,
                    "a"
                ).close()





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
        "✅ Generator finished"
    )





generate()
