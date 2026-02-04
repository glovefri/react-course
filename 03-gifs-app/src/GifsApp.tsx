import { GifsList } from "./gifs/components/GifsList.tsx";
import PreviousSearches from "./gifs/components/PreviousSearches.tsx";
import { useGif } from "./gifs/hooks/useGif.tsx";
import CustomHeader from "./shared/components/CustomHeader.tsx";
import SearchBar from "./shared/components/SearchBar.tsx";

export const GifsApp = () => {

  const { previousTerms, gifs, handleTermClicked, handleSearch } = useGif();

  return (
    <>

    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

    <SearchBar placeholder="Buscar gifs" onQuery={handleSearch}/>

    <PreviousSearches previousSearches={previousTerms} onLabelClicked={handleTermClicked}/>

    <GifsList gifs={gifs}/>
    </>
  )
}
