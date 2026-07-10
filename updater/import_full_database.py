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



VERSIONS = [
    "N",
    "R",
    "F",
    "FR",
    "NR",
    "NF",
    "NFR",
    "M",
    "MR",
    "MF",
    "MFR"
]





def create_item(data):

    values = {}

    for version in VERSIONS:
        values[version] = 0



    return {

        "id": data["id"],

        "name": data["name"],

        "image": data["image"],

        "category": data["category"],

        "values": values,

        "demand": 1,

        "history": []

    }







def import_file(source):


    with open(
        source,
        "r",
        encoding="utf-8"
    ) as file:

        items = json.load(file)



    result = []


    for item in items:

        result.append(
            create_item(item)
        )


    return result








for category in CATEGORIES:


    source = category + "_source.json"


    if os.path.exists(source):


        data = import_file(source)


        with open(

            DATABASE + "/" + category + ".json",

            "w",

            encoding="utf-8"

        ) as file:


            json.dump(

                data,

                file,

                indent=4,

                ensure_ascii=False

            )


        print(
            "Updated:",
            category
        )



print(
"✅ Full database imported"
)
