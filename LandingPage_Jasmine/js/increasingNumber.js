function increaseNumber() {
    // document.getElementById("box-User").innerHTML = (2 + "M");
    let numUsers=0;
    let myIntervalUsers = setInterval(() => {
        if (numUsers == 10) clearInterval(myIntervalUsers);
        document.getElementById("box-User").innerHTML = (numUsers + " M");
        numUsers++;
    }, 30);

    let numDown=0;
    let myIntervalDown = setInterval(() => {
        if (numDown == 23) clearInterval(myIntervalDown);
        document.getElementById("box-Download").innerHTML = (numDown + " K");
        numDown++;
    }, 20);

    let numCus=0;
    let myIntervalCus = setInterval(() => {
        if (numCus == 9) clearInterval(myIntervalCus);
        document.getElementById("box-Customers").innerHTML = (numCus + " M");
        numCus++;
    }, 30);

    let numDev=0;
    let myIntervalDev = setInterval(() => {
        if (numDev == 12) clearInterval(myIntervalDev);
        document.getElementById("box-Developers").innerHTML = (numDev + " K");
        numDev++;
    }, 50);
    // var i = 0;
    // function myTimer() {
    //     document.getElementById("box-User").innerHTML = (i + "M");
    // }

    // for (let i = 0; i <= 10; i++) {
    //     document.getElementById("box-User").innerHTML = (i + "M");
    // }

    // for (let i=0; i<=23; i++){
    //     document.getElementById("box-Download").innerHTML = (i + "K");
    // }

    // for (let i=0; i<=9; i++){
    //     document.getElementById("box-Developers").innerHTML = (i + "M");
    // }
}