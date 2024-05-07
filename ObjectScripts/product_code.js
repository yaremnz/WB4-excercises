//suplierCoode-productNumber-size
function parsePartCode(partCode){
    let valueList = partCode.split("-");
    console.log(valueList);

    const supplier = valueList[0];
    const number = valueList[1];
    const size = valueList[2];

    return { //create object literal
        supplierCode: supplier,
        productNumber: number,
        size: size
    }
}
function display(partObject){
    console.log(`
        Supplier: ${part1.supplierCode};
        Product Number: ${part1.productNumber};
        Size: ${part1.size}
    `);
}

//tests
let partCode1 = "XYZ-1234-L";
let part1 = parsePartCode(partCode1);
display(part1);

display(parsePartCode("ABC-4321-S"));




// console.log("Supplier: " + part1.supplierCode);
// console.log("Product Number: " + part1.productNumber)
// console.log("Size: " + part1.size)