// Создать функцию конструктор для создания пользователя с полями name, age. Добавить метод toString, который выводит данные в строку
// Эту задачу делаем на Javascript

function User(name, age) {
    this.name = name
    this.age = age
}
User.prototype.toString = function () {
    return `${this.name}, ${this.age}`
}
const user = new User('Sergei', 18)
console.log(user.toString()) //Name, 18
