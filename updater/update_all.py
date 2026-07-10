# 🌙 Nervees Values
# One Click Full Update


import subprocess
import time





tasks = [

    {
        "name": "Checking new items",
        "file": "detect_new_items.py"
    },


    {
        "name": "Updating database",
        "file": "update_database.py"
    },


    {
        "name": "Updating images",
        "file": "image_downloader.py"
    },


    {
        "name": "Generating database",
        "file": "generate_pets.py"
    }

]






def run_task(task):


    print("\n--------------------")

    print(
        "▶",
        task["name"]
    )


    subprocess.run(

        [
            "python",
            task["file"]
        ]

    )


    time.sleep(1)








print(
"""
🌙 Nervees Values
Automatic Update System

Starting...
"""
)






for task in tasks:


    run_task(task)






print(
"""
====================

✅ UPDATE COMPLETE

Database updated
Images checked
New items added

====================
"""
)
