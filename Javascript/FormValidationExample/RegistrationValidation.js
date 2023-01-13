setCookie("name", "Admin", 365);
setCookie("pw", "2134456789", 365);

function validateAccount() {
    let nameUser = document.getElementById("name").value;
    let email = document.getElementById("email").value;;
    let pw = document.getElementById("pw").value;

    console.log("nameUse = " + nameUser + ", email = " + email + ", pw = " + pw);

    var nameformat = /^[A-Za-z\s]*$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (! nameformat.test(nameUser)) {
        alert("Name error : " + nameUser);
        return;
    } else if (! email.match(mailformat)) {
        alert("Email error : " + email);
        return;
    } else if (pw.length <= 8) {
        alert("Password error : pw length = " + pw.length);
        return;
    } else {
        setCookie("name", nameUser, 365);
        setCookie("pw", pw, 365);
        
        try {
            alert("hehe");
            window.location.assign("LoginForm.html");
        } catch (error) {
            alert(error);
        }
    }
}

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function deleteCookie(name) {
    setCookie(name, null, null);
}
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });
    return result;
}
