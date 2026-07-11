import json
import os


files=[
"pets",
"vehicles",
"pet_wear",
"toys",
"eggs",
"gifts"
]


for file in files:


    path="database/"+file+".json"



    if not os.path.exists(path):


        with open(
            path,
            "w",
            encoding="utf-8"
        ) as f:


            json.dump(
                [],
                f
            )



print("Generator complete")
