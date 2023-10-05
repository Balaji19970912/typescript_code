function createUser({name:string, isPaid: boolean}){}


let newUser = {name: 'luffy', isPaid: false, email: 'o@o.com'}
createUser(newUser)

function createCourse():{name: string, price: number} {
    return {name: 'One Course', price: 1};
}