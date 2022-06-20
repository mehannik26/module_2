// Подсчитать средний возраст группы
function avgAge(arr) {
    let age = 0
    for (let index in arr) {
        age += arr[index]
    }
    age /= 3
    return age
}

const group = {
    Jek: 18,
    Peeter: 20,
    Anna: 27
}
console.log(avgAge(group)); //21.666666