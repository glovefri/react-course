import type { CSSProperties } from 'react'

const firstName = 'Gloria'
const lastName = 'Figueroa'

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear']

const address = {
  zipCode: 'ABC-123',
  country: 'Canadá'
}

const isActive = true

const myStyles: CSSProperties = {
          backgroundColor: '#fafafa',
          borderRadius: 10,
          padding: 10,
          marginTop: 30
        }
export const MyAwesomeApp = () => {
  return (
    <div>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>

      <p>{2 +2}</p>
      <p className='mi-clase-favorita'>{favoriteGames.join(', ')}</p>

    <h1>{isActive ? 'Activo' : 'No activo'}</h1>
      <p
        style={myStyles}
      >{JSON.stringify(address)}</p>
    </div>
  )
}