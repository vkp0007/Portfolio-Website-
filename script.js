const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const instagram = document.querySelector("#instagram");

// Function to add event listener to each icon and open the respective link
function iconLink(icon, url) {
    icon.addEventListener("click", function () {
        window.open(url, "_blank");  // Open the URL in a new tab
    });
}

// Adding event listeners for the respective icons and their URLs
iconLink(linkedin, "https://www.linkedin.com/in/vinaykrpatel/");
iconLink(github, "https://github.com/vkp0007");
iconLink(instagram, "https://www.instagram.com/vkp787/");


