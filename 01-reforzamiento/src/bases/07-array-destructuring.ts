const characterNames = ['Spiderman', 'Thor', 'Hulk']

const [,,p2] = characterNames;

console.log( p2 );

const returnsArrayFn = () => {
  return ['Hello', 123] as const
}

const [ letters, numbers ] = returnsArrayFn();