const TaylorSwift= {
    gender : "female",
    _age : 0,

    set age(x) {
        if (x < 30) {
            console.log("error");
        }
        else{
            this._age = `${x}`;
        }
    }
}

TaylorSwift.age = 29; 