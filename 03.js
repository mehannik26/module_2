// Дописать функцию для подсчета суммы нечетных чисел в массиве
function sumOdd(arr) {
    let n = 0
    for (const value of arr) {
        if (value % 2 == 1) {
            n += value
        }
    }
    return n
}
const nums = [1, 2, 3]
console.log(sumOdd(nums)) // 4