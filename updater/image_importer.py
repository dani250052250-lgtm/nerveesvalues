# 🐾 Nervees Values Image Importer
# Автоматическое добавление изображений


import os
import json



CATEGORIES = [

    "pets",
    "vehicles",
    "pet_wear",
    "toys",
    "eggs",
    "gifts"

]





BASE_FOLDER = "../images"

DATABASE_FOLDER = "../database"






def create_folders():


    for category in CATEGORIES:


        path = os.path.join(
            BASE_FOLDER,
            category
        )


        os.makedirs(
            path,
            exist_ok=True
        )






def create_database_files():


    for category in CATEGORIES:


        file = os.path.join(

            DATABASE_FOLDER,

            category + ".json"

        )


        if not os.path.exists(file):


            with open(
                file,
                "w",
                encoding="utf-8"
            ) as f:


                json.dump(
                    [],
                    f,
                    indent=4,
                    ensure_ascii=False
                )







def main():


    print(
        "🌙 Nervees Values Importer"
    )


    create_folders()


    create_database_files()


    print(
        "✅ Structure ready"
    )





if __name__ == "__main__":

    main()
