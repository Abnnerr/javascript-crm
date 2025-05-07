// function moveZeros(arr) {
//     let lista= []

//     for (let i = 0; i < arr.length; i++) {

//         if ((arr[i] != 0)) {
//             lista.push(arr[i])

//         }
//         if ((arr[i] == 0)) {
//             lista.push(arr[i])
//         }

//     }
//     return lista
// }
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))


function findOdd(A) {

    var listaPar = []
    contadorPar = 0
    contadorImpar = 0
    for (var i = 0; i < A.length; i++) {
        // console.log(A[i])

        if (A[i] % 2 == 0) {
            contadorPar += 1
            listaPar.push(A[i])
            // console.log(listaPar)

        }
        if (A[i] % 2 != 0) {
            contadorImpar += 1

        }
    }

    // console.log(contadorPar)
    // console.log(contadorImpar)
}
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])