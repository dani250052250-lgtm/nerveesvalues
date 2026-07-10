# 🌙 Nervees Values
# Automatic Daily Update System


import schedule
import time
import subprocess




def update():


    print(
        "🌙 Starting automatic update..."
    )


    subprocess.run(

        [
            "python",
            "update_all.py"
        ]

    )


    print(
        "✅ Update finished"
    )







# Автоматическое обновление каждый день в 15:00

schedule.every().day.at(
    "15:00"
).do(update)






print(
    """
🌙 Nervees Values

🕒 Auto updater started

Next update:
Every day at 15:00

"""
)






while True:


    schedule.run_pending()


    time.sleep(60)
