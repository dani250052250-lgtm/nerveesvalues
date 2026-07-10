// 🌙 Nervees Values
// Theme Switcher



function toggleTheme(){


    document.body.classList.toggle(
        "light"
    );



    let mode =

    document.body.classList.contains(
        "light"
    )

    ? "light"

    : "dark";



    localStorage.setItem(
        "theme",
        mode
    );


}







function loadTheme(){



    let saved =

    localStorage.getItem(
        "theme"
    );



    if(saved === "light"){


        document.body.classList.add(
            "light"
        );


    }


}





loadTheme();
