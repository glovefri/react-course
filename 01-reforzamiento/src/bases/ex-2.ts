import { heroes, type Hero, Owner } from "../data/heroes.data";

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  return heroes.filter( hero => hero.owner === owner)
}
