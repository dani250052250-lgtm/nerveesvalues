# 🌙 Nervees Values
# Item Generator Template


def create_item(
    item_id,
    name,
    image,
    category
):


    item = {


        "id": item_id,


        "name": name,


        "image": image,


        "category": category,



        "values": {


            "N": 0,

            "R": 0,

            "F": 0,

            "FR": 0,


            "NR": 0,

            "NF": 0,

            "NFR": 0,


            "M": 0,

            "MR": 0,

            "MF": 0,

            "MFR": 0


        },



        "demand": 1,



        "history": []


    }


    return item







# Пример создания питомца


frost = create_item(

    "frost_dragon",

    "Frost Dragon",

    "frost-dragon.png",

    "pets"

)



print(frost)
