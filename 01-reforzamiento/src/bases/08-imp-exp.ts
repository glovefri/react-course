
import { heroes, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero|undefined => {
  const hero = heroes.find( hero => hero.id === id);

  // if (!hero) {
  //   throw new Error(`Heroe con id ${id} no encontrado`)
  // }
  return hero;
}

console.log(getHeroById(1));