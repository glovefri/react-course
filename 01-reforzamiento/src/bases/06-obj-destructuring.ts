const person = {
  name: 'Tony',
  age: 40,
  key: 'Ironman'
}

const { name:iromanName, age, key } = person

console.log({ iromanName, age, key });

interface Hero {
  name: string
  age: number
  key: string
  rank?: string
}

const useContext = ( {key, name, age, rank}: Hero) => {
  return {
    keyName: key,
    user: {
      name: name,
      age: age
    },
    rank: rank
  }
}

const {keyName,
  user: { name },
  rank
} = useContext(person)

console.log({keyName, name, rank})
