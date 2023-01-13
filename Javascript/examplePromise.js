// fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => console.log(json))
async function fetchData(){
    try {
        let res = await fetch('https://fakestoreapi.com/products');
        let json = await res.json();
        console.log(json)
    } catch (error) {
        console.log("This is function reject");
    }
}