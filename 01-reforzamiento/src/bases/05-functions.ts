
function greet( name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string) => `Hola ${name}`

const message = greet('Goku');

const message2 = greet2('Vegeta');
console.log(message);
console.log(message2);

function getUser() {
  return {
    uid: 1,
    username: 'Goku'
  }
}

interface User {
  uid: number;
  username: string;
}

const getUser2 = (): User => ({
    uid: 2,
    username: 'Vegeta'
  })

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

const myNumbers = [1,2,3,4,5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// })

// Se puede simplificar de la siguiente manera:
// el argumento por defecto es el value
myNumbers.forEach(console.log);