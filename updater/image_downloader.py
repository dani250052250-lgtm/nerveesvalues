# 🌙 Nervees Values
# Image Downloader


import os
import requests





IMAGE_FOLDER = "../images"






def create_folder(category):


    path = os.path.join(

        IMAGE_FOLDER,

        category

    )


    os.makedirs(

        path,

        exist_ok=True

    )


    return path







def download_image(

    category,

    filename,

    url

):


    folder = create_folder(category)



    filepath = os.path.join(

        folder,

        filename

    )




    # Если файл уже есть,
    # не скачиваем заново


    if os.path.exists(filepath):


        print(

            "Already exists:",

            filename

        )


        return





    try:


        response = requests.get(

            url,

            timeout=10

        )



        response.raise_for_status()



        with open(

            filepath,

            "wb"

        ) as file:


            file.write(

                response.content

            )



        print(

            "Downloaded:",

            filename

        )




    except Exception as e:


        print(

            "Error:",

            e

        )








# Пример


download_image(

    "pets",

    "frost-dragon.png",

    "IMAGE_URL_HERE"

)
