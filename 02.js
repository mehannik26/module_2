// Добавить роль 'viewer' в конец массива
const roles = ['owner', 'admin', 'reviewer'];
roles.push('viewer')
for (const value of roles) {
    console.log(value)
}