function count(obj) {
    let n = 0
    for (let value in obj) {
        n++
    }
    return n
}

const group = {
    Jek: '18',
    Peeter: '20',
    Anna: '27'
}
console.log(count(group)) // 3
