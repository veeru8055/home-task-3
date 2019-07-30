class Controller {
    constructor(model) {
        this._model = model;
    }

    createLeft() {
        let left = this._model.createLeft();
        return left;
    }

    optionSelect() {
        let index = document.getElementById("mySelect").selectedIndex;
        let option = document.getElementsByTagName("option")[index];
        let selectedOption = option.value;
        channel = selectedOption;
        let left = document.getElementsByClassName("left")[0];
        let innerLeft1 = document.getElementById("innerLeft");
        left.removeChild(innerLeft1);
        let innerLeft = this._model.createLeft();
        left.appendChild(innerLeft);
    }
}


let emails = [];
window.localStorage.setItem("emails", JSON.stringify(emails));
function storeEmail() {
    let message2 = document.getElementById("message2");
    message2.style.display = "none";
    let message = document.getElementById("message");
    message.style.display = "none";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
        emails = JSON.parse(window.localStorage.getItem("emails"));
        if (emails.includes(document.getElementById("email").value)) {
            document.getElementById("email").value = "";
            message.innerHTML = "<b>Email already registered!<b>"
            message.style.display = "block";
        } else {
            emails.push(document.getElementById("email").value);
            window.localStorage.setItem("emails", JSON.stringify(emails));
            document.getElementById("email").value = "";
            message2.innerHTML = "<b>Email registered!<b>"
            message2.style.display = "block";
        }
    } else {
        message.innerHTML = "<b>Invalid email!<b>"
        message.style.display = "block";
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function details(tileId) {
    let modal = document.getElementById("myModal");
    let info = document.getElementById(tileId);
    let title = info.getElementsByTagName("h1")[0];
    let p1 = info.getElementsByTagName("h5")[0];
    let p2 = info.getElementsByTagName("p")[0];
    let header = modal.getElementsByClassName("modal-header")[0];
    header.getElementsByTagName("h2")[0].innerHTML = title.innerHTML;
    let body = modal.getElementsByClassName("modal-body")[0];
    body.getElementsByTagName("p")[0].innerHTML = p1.innerHTML;
    body.getElementsByTagName("p")[1].innerHTML = p2.innerHTML;
    modal.style.display = "block";
}
window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
