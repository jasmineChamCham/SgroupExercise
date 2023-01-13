let getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("In settimeout");
        // resolve();
        reject("Something was wrong");
    }, 500);
})

getData.then(() => {
    console.log("This is function resolve");
}). catch((err) => {
    console.log("This is function reject");
})

// ======================
// tran promise

getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("In settimeout");
        resolve("first", "second");
        // reject("Something was wrong");
    }, 500);
})

function cleanCode(){
    console.log("Clean code");
    return new Promise((resolve, reject) => {
        resolve();
    })
}

getData.then(cleanCode).then( () => {
    console.log("Finished");
} )

// async await
async function main(){
    try {
        let data = await getData // data = parameter in resolve func in that promise --> in this case, data = "first" 
    } catch (error) {
        console.log("This is function reject");
    }
    console.log(data);
}
main();

// ======================
// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
// .then(json => console.log(json))
async function fetchData(){
    try {
        let res = await fetch('https://fakestoreapi.com/products');
        let json = await res.json();
        console.log(json)
    } catch (error) {
        console.log("This is function reject");
    }
}

