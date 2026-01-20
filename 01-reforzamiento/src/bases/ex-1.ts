
const useState = (name: string) => {
  const internalFunction = (newName: string) => {
    console.log(newName)
  }
  return [name, internalFunction] as const
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');