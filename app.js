const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username-input");
const userList = document.getElementById("user-list");
const messagingSection = document.getElementById("messaging");
const loginSection = document.getElementById("login");

let currentUser;

loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username.length === 0) {
        alert("Please enter a username.");
        return;
    }

    currentUser = username;
    const userListItem = document.createElement("li");
    userListItem.textContent = username;
    userListItem.style.color = "#21C10A";
    userList.appendChild(userListItem);

    loginSection.style.display = "none";
    messagingSection.style.display = "block";
});
