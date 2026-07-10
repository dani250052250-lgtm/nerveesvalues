# 🌙 Nervees Values
# Admin Save API


from flask import Flask, request, jsonify
import json
import os



app = Flask(__name__)




DATABASE = "../database"





@app.route("/save", methods=["POST"])
def save_item():


    data = request.json



    category = data["category"]



    file = os.path.join(

        DATABASE,

        category + ".json"

    )




    with open(

        file,

        "r",

        encoding="utf-8"

    ) as f:

        items = json.load(f)






    for item in items:


        if item["id"] == data["id"]:


            item.update(data)


            break






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

        "status":"saved"

    })







@app.route("/")
def home():


    return "Nervees Admin API Running"





app.run(

    host="0.0.0.0",

    port=5000

)
