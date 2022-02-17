let btn = document.querySelector("#btn")
    let sidebar = document.querySelector(".sidebar")
    let searchBtn = document.querySelector("search")

    btn.onclick = function() {
        sidebar.classList.toggle("active")
    }

    sidebar.onclick = function() {
        sidebar.classList.toggle("active")
    }

    searchbtn.onclick = function() {
        sidebar.classList.toggle("active")
    }