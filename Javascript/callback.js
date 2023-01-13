function getData(cleanCode, done){
    setTimeout(() => {
        console.log("hihi");
        cleanCode(done)
    }, 1000);
}

function cleanCode(done){
    console.log("Clean code");
    done();
}

function done(){
    console.log("done");
}

getData(cleanCode, done);

// hihi
// Clean code
// done