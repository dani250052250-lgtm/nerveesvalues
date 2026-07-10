# 🌙 Nervees Values
# One Click Update System


import os
import subprocess





scripts = [

    "image_importer.py",

    "update_database.py",

    "image_downloader.py"

]






def run():


    print(
        "🌙 Starting Nervees Update..."
    )



    for script in scripts:


        print(
            "Running:",
            script
        )


        subprocess.run(

            [
                "python",
                script
            ]

        )



    print(

    "✅ Update finished"

    )







if __name__ == "__main__":

    run()
