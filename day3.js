// penggunaan for 
// for (let i = 10; i >= 5; i--){
//     console.log (i)
// }

// console.log ("Luncurkan🚀")



// penggunaan for dengan percababangan 

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log (`${i} : Adalah Genap`)

//     } else {
//         console.log (`${i} : Adalah Ganjil`)
//     }
// }


for (let i = 1; i < 16; i++){

    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 ===0){
        console.log ('Buzz')
    } else {
        console.log (i)
    }
}