function printContract(c){
    console.log(`
        ${c.name}
        ${c.address}
        ${c.city}, ${c.state} ${c.zip}
`);

    // Pursalane Faye 
    // 121 Main Street 
    // BrenBrook, Texas 76126
}
//TESTS
let myInfoX = {
    name : "Yareli Cerda",
    address : "123 Main Street",
    city : "Atlanta",
    state : "GA",
    zip : "30033",
}

let myInfoY = {
    name : "Kevin Long",
    address : "123 Dandy Lane",
    city : "Portland",
    state : "OR",
    zip : "97018",
}

printContract(myInfoX);
printContract(myInfoY);
