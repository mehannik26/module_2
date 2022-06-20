// Написать функцию которая меняет key и value местами. Гарантируется что в исходном объект value уникальны
function objectReverse(obj) {
    let rev = {}
    for (let index in obj) {
        rev[obj[index]] = index
    }
    return rev
}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(objectReverse(group))
