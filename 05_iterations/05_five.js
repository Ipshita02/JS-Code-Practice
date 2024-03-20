// forEach : on arrays, array of objects
 
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)      // giving some declared fn. We only need to give reference don't execute it.
                            // by executing means : don't write it like 'coding.forEach(printMe())'

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

// [{}, {}, {}] => array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // item : name of every object. '{}' => item
    // console.log(`language name: ${item.languageName}`);
    // console.log(`file name: ${item.languageFileName}`);
} )


const mobile = [
    {
        mobileName: "Galaxy S4",
        price : 12000
    },
    {
        mobileName: "Redmi pro 11",
        price : 14000
    },
    {
        mobileName: "Samsung",
        price : 20000
    },
    {
        mobileName: "Oppo",
        price : 12000
    }
]

mobile.forEach((val) => {
    // console.log(`mobile name ${val.mobileName} and price ${val.price}`);
    console.log(val.mobileName," - ", val.price);
})