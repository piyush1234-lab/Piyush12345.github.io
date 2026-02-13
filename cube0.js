// Centralized configuration for easier editing
const CONFIG = {
    targetNames: ["her name"], // distinct names (lowercase)
    passwords: {
        main: "Piyush@1234", // as u want
        userEdit: "Editz@1234",
        userAll: "All@1234"
    },
    pages: {
        cube1: "letter1.html",
        cube2: "cube2.html",
        cube3: "cube3.html"
    }
};

/**
 * Checks if the entered name matches the target or stored name
 * and triggers the visibility of the span element.
 */
function check() {
    const inputEl = document.getElementById("in2");
    const spanEl = document.getElementById("spn");
    const storedName = localStorage.getItem("n");

    const inputValue = inputEl.value.trim();
    const inputLower = inputValue.toLowerCase();

    // Check if input matches "Sneha" variants OR the stored name
    const isValidTarget = CONFIG.targetNames.includes(inputLower);
    const isStoredUser = storedName && (inputValue === storedName);

    if (isValidTarget || isStoredUser) {
        spanEl.style.visibility = "visible";
        spanEl.style.animation = "fadein 1s forwards";
    } else {
        spanEl.style.visibility = "hidden";
    }
}

/**
 * Trigger the heart animation.
 */
function graph() {
    const d = document.getElementById("d");
    const container = document.getElementById('sprinkle-container');

    // Show the container
    d.style.visibility = "visible";
    d.style.animation = "fadein 2s forwards";

    // Clear previous particles to prevent lag if clicked multiple times
    container.innerHTML = ''; 

    for (let i = 0; i < 30; i++) {
        let p = document.createElement('div');
        p.classList.add('particle');
        p.innerText = "❤";
        p.style.position = "absolute"; // Ensure css handles this, but good safety
        p.style.left = Math.random() * 100 + "vw";
        // varied speeds and delays for natural look
        p.style.animationDuration = (2 + Math.random() * 3) + "s";
        p.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(p);
    }
}

/**
 * Replaces the text "user" with the actual stored name in the input field.
 */
function newName() {
    const storedName = localStorage.getItem("n");
    const input = document.getElementById("in2");

    if (storedName && input.value.includes("user")) {
        input.value = input.value.replace("user", storedName);
    }
}

/**
 * Validates credentials and redirects to the appropriate page.
 */
function login() {
    const inputEl = document.getElementById("in2");
    const pwdEl = document.getElementById("pwd");
    const storedName = localStorage.getItem("n");

    const inputVal = inputEl.value.trim();
    const inputLower = inputVal.toLowerCase();
    const password = pwdEl.value.trim();

if (inputVal === "") {
    alert("Please provide the Username");
    inputEl.focus();
    return;
}

if (password === "") {
    alert("Please provide the Password.");
    pwdEl.focus();
    return;
}

    // Logic 1: Sneha Login
    if (CONFIG.targetNames.includes(inputLower) && password === CONFIG.passwords.main) {
    sessionStorage.setItem("access_granted", "true")
        window.location.href = CONFIG.pages.cube1;
    } 
    // Logic 2: Stored User (Edit Access)
    else if (storedName && inputVal === storedName && password === CONFIG.passwords.userEdit) {
    sessionStorage.setItem("access_granted", "true")
        window.location.href = CONFIG.pages.cube2;
    }
    // Logic 3: Stored User (All Access)
    else if (storedName && inputVal === storedName && password === CONFIG.passwords.userAll) {
    sessionStorage.setItem("access_granted", "true")
        window.location.href = CONFIG.pages.cube3;
    } 
    // Error Handling
    else {
        alert("Wrong name or password! \n\nIf the page still doesn't open after correcting it, you may not have access to it.");
    }
}

// UI Interaction Functions
function select() {
    document.getElementById("btn1").style.boxShadow = "0px 0px 20px 10px rgba(255, 255, 255, 0.7)";
}

function deselect() {
    document.getElementById("btn1").style.boxShadow = "none";
}