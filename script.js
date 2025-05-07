function handleButtonClick(answer) {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    if (answer === "no") {
        // Change the No button to Yes if clicked
        noButton.textContent = "Yes";
        noButton.style.backgroundColor = "#4caf50";
        noButton.style.border = "none";
        noButton.onclick = function() {
            handleButtonClick('yes');
        };
    } else {
        // If Yes is clicked, show a little message
        alert("I love you ,so much💛");
    }
}