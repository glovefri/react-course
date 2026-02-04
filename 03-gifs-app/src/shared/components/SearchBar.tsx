import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export default function SearchBar({ placeholder = "Buscar", onQuery }: Props) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    // Esto se llama solo cuando se desmonta el componente
    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
