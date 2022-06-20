// Написать функцию, которая убирает дублирование в массиве строк
function uniq(arr) {
    const str = []
    for (let value of arr) {
        if (str.includes(value)) {
            continue
        }
        else {
            str.push(value)
        }
    }
    return str
}

const users = ['user1', 'user2', 'user3', 'user2']
console.log(uniq(users)) //['user1', 'user2', 'user3']
