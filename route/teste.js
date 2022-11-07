let vetor = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
]

let vetor2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7"
]


const compare = (arr1, arr2) => {
    return arr1.length == arr2.length &&
    arr1.every((item, index) => item == arr2[index])
}

console.log(compare(vetor, vetor2))


/* 
0
: 
"3007668506003092348"
1
: 
"3007667420057044860"
2
: 
"3007668224216829820"
3
: 
"3007668046252207866"
4
: 
"3007668662019916668"
5
: 
"3007667833274213244"
*/