console.log("hihi");

function validateLogin(){
    let validName = getCookie("name");
    let validPass = getCookie("pw");

    console.log("validName" + validName);
    console.log("validPass" + validPass)

    let nameLogin = document.getElementById("name").value;
    let pwLogin = document.getElementById("pw").value;

    console.log("nameLogin" + nameLogin);
    console.log("pwLogin" + pwLogin);


    if ((validName == nameLogin) && (validPass == pwLogin) ) {
        alert("ok");
    }
    else{
        alert ("validName=" + validName + ", nameLogin=" + nameLogin);
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

