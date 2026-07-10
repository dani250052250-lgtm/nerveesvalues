# 🌙 Nervees Values
# Universal Admin Save API


from flask import Flask, request, jsonify

import json

import os




app = Flask(__name__)





DATABASE = "../database"






@app.route("/save", methods=["POST"])

def save_item():



    data = request.json





    category = data.get(
        "category"
    )



    if not category:


        return jsonify({

            "error":
            "Category missing"

        })







    file = os.path.join(

        DATABASE,

        category + ".json"

    )







    if not os.path.exists(file):


        return jsonify({

            "error":
            "Database not found"

        })








    with open(

        file,

        "r",

        encoding="utf-8"

    ) as f:


        items = json.load(f)








    saved = False






    for item in items:



        if item["id"] == data["id"]:



            item.update(data)


            saved = True


            break








    if saved:



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




        return jsonify({


            "status":
            "saved"



        })







    return jsonify({


        "status":
        "item not found"



    })









@app.route("/")

def home():


    return "🌙 Nervees Admin API Online"







app.run(

    host="0.0.0.0",

    port=5000

)
