let text_box = document.querySelector("#text");
let button = document.querySelector("#btn");
let tasks = document.querySelector(".tasks");

// Add Task
button.addEventListener("click", () => {
    let value = text_box.value.trim();

    if (value === "") {
        alert("You can't have an empty task. Enter your task.");
        return;
    }

    let html = `
        <div class="task">
            <input type="checkbox" name="completed" class="ckbox">
            <div class="value">${value}</div>
            <div class="remove">
                <button class="rem_btn">Remove</button>
            </div>
        </div>
    `;

    tasks.insertAdjacentHTML("afterbegin", html);
    text_box.value = "";

    savedata();
});

// Remove Task
tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("rem_btn")) {
        e.target.closest(".task").remove();
        savedata();
    }
});

// Complete Task
tasks.addEventListener("change", (e) => {
    if (e.target.classList.contains("ckbox")) {
        e.target.closest(".task").remove();
        savedata();
    }
});

text_box.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        button.click()
    }
})


// Dark Mode Toggle
let mode = document.querySelector(".mode");
let darkmode=false

mode.addEventListener("click", () => {
    let container = document.querySelector(".container");

    if (!darkmode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.body.style.transition = "0.5s";

        container.style.backgroundColor = "rgb(33, 36, 38)";
        container.style.border = "1px solid grey";
        container.style.color="white"

        document.querySelector("#btn").style.color = "white";
        darkmode=true
        mode.src="Assets/moon.svg"
    } else {
        mode.src="Assets/sun.svg"

        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "black";

        container.style.backgroundColor = "white";
        container.style.border = "none";
        container.style.color="black"
        document.querySelector("#btn").style.color = "black";
        darkmode=false
    }
});

// Save Tasks
function savedata() {
    localStorage.setItem("data", tasks.innerHTML);
}

// Load Tasks
function showdata() {
    let data = localStorage.getItem("data");

    if (data) {
        tasks.innerHTML = data;
    }
}


showdata();


