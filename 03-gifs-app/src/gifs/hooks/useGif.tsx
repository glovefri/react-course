
import { useRef, useState } from "react";
import { getGifByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface.ts";
import { mockGifs } from "../../mocks-data/gifs-mock.ts";

// const gifsCache: Record<string, Gif[]> = {}

export const useGif = () => {
  const [previousTerms, setPrevoiusTerms] = useState<string[]>(['drake and josh', 'rick and morty']);
  const [gifs, setGifs] = useState<Gif[]>(mockGifs);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();

    if (query.length === 0) {
      return;
    }

    if (previousTerms.includes(query)) {
      return;
    }

    setPrevoiusTerms([query, ...previousTerms].slice(0, 6));

    const gifs = await getGifByQuery(query);
    setGifs(gifs);

    gifsCache.current[query] = gifs;
    console.log(gifsCache);
  }

  return { previousTerms, gifs, handleTermClicked, handleSearch }
}
