// No define comportamiento, solo define la forma de un objeto
interface Person {
  firstName: string;
    lastName: string;
    age: number;
    // ? indica que la propiedad es opcional
    address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const darthVader: Person = {
  firstName: 'Anakin',
  lastName: 'Skywalker',
  age: 25,
  address: {
    postalCode: '12345',
    city: 'Coruscant'
  }
}


// Toma las propiedades del objeto darthVader y las copia en el objeto obiWan
// const obiWan = {...darthVader};

// const obiWan = structuredClone(darthVader);

// obiWan.firstName = 'Obi-Wan';
// obiWan.lastName = 'Kenobi';
// obiWan.age = 30;
// obiWan.address.city = 'earth';

// console.log(darthVader, obiWan);

console.log(darthVader);