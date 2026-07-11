# 🌙 Nervees Values
# Secure Admin API


from flask import Flask, request, jsonify, session

import json
import os




app = Flask(__name__)



app.secret_key = "CHANGE_THIS_SECRET"




ADMIN_PASSWORD = "Eee123321Eee"




DATABASE = "../database"







@app.route("/login", methods=["POST"])

def login():


    data = request.json



    if data.get("password") == ADMIN_PASSWORD:


        session["admin"] = True



        return jsonify({

            "status":"success"

        })



    return jsonify({

        "status":"error"

    })









@app.route("/save", methods=["POST"])

def save():



    if not session.get("admin"):


        return jsonify({

            "error":"No access"

        })







    data = request.json



    category = data["category"]



    file = os.path.join(

        DATABASE,

        category+".json"

    )






    with open(

        file,

        "r",

        encoding="utf-8"

    ) as f:


        items=json.load(f)






    for item in items:



        if item["id"] == data["id"]:


            item.update(data)





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








app.run(

host="0.0.0.0",

port=5000

)
