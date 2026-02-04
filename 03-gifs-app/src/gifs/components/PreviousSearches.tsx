
interface Props {
    previousSearches: string[];

    onLabelClicked: (term:string) => void;
}

export default function PreviousSearches({ previousSearches, onLabelClicked }: Props) {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {
            previousSearches.map((search, index) => (
                <li key={index}
                onClick={() => onLabelClicked(search)}>{search}</li>
            ))
        }
      </ul>
    </div>
  )
}
