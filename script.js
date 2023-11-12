document.getElementById("button-close").addEventListener("click", function () {
    var elements = document.querySelectorAll(".getGPT__left__nav__part");
    var button = document.getElementById("button-open");
    button.style.display = "block";
    elements.forEach(function (element) {
        element.classList.remove("hide");
        element.classList.add("appear");
        element.style.animationPlayState = 'running';
        setTimeout(function () {
            element.style.display = "none";
        }, 100);
    });
});
document.getElementById("button-open").addEventListener("click", function () {
    var elements = document.querySelectorAll(".getGPT__left__nav__part");
    var button = document.getElementById("button-open");
    button.style.display = "none";
    elements.forEach(function (element) {
        element.classList.remove("appear");
        element.classList.add("hide");
        element.style.animationPlayState = 'running';
        setTimeout(function () {
            element.style.display = "flex";
        }, 100);
    });
});
document.getElementById("upgrade-plus-button").addEventListener("click", function () {
    var element = document.querySelector(".upgrade");
    var button = document.getElementById("upgrade-plus-button");
    element.style.display = "flex";
});
document.getElementById("close-upgrade").addEventListener("click", function () {
    var element = document.querySelector(".upgrade");
    var button = document.getElementById("close-upgrade");
    element.style.display = "none";
});
document.getElementById("light-mode-button").addEventListener("click", function () {
    var elements = document.querySelectorAll(".light-mode");
    var ele = document.querySelector(".sub-light-mode");
    var button = document.getElementById("light-mode-button");
    var change = document.getElementById("change");
    if (change.innerHTML === "Light mode") {
        change.innerHTML = "Dark mode";
        elements.forEach(function (element) {
            element.classList.add("light-on");
            ele.classList.add("sub-light-on");
        });
    } else {
        change.innerHTML = "Light mode";
        elements.forEach(function (element) {
            element.classList.remove("light-on");
            ele.classList.remove("sub-light-on");
        });
    }
});
var messageInput = document.getElementById("search");
var submitButton = document.getElementById("send-button");
var newchatButton = document.getElementById("newchat-button");
messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submitButton.click();
    }
});
submitButton.addEventListener("click", function () {
    var clear = document.querySelectorAll(".after-send");
    var chatbox = document.querySelector("#chat-box");
    var button = document.getElementById("send-button");
    clear.forEach(function (e) {
        e.style.display = "none";
    });
    chatbox.style.display = "block";
    sendMessage();
});
newchatButton.addEventListener("click", function () {
    var c = document.querySelector(".u__container");
    var s = document.querySelector(".suggest");
    var chatbox = document.querySelector("#chat-box");
    var button = document.getElementById("newchat-button");
    c.style.display = "flex";
    s.style.display = "grid";
    while (chatbox.firstChild) {
        chatbox.removeChild(chatbox.firstChild);
    }
    chatbox.style.display = "none";
})
function sendMessage() {
    var userInput = document.getElementById('search').value;
    displayMessage("You: " + userInput);
    displayMessage("Chat-GPT: Hello");
    document.getElementById('search').value = '';
}

function displayMessage(message) {
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('inside-chatbox');
    messageDiv.textContent = message;
    var chatBox = document.getElementById('chat-box');
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("3ver").addEventListener("click",function() {
    var back = document.querySelector("#back-animation");
    var change = document.querySelector("#change-plus");
    back.classList.remove("right");
    back.classList.add("left");
    change.innerHTML = "ChatGPT";
    change.style.removeProperty("color");
});
document.getElementById("4ver").addEventListener("click",function() {
    var back = document.querySelector("#back-animation");
    var change = document.querySelector("#change-plus");
    back.classList.remove("left");
    back.classList.add("right");
    change.innerHTML = "ChatGPT Plus";
    change.style.color="violet";
});