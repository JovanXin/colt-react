import Pokecard from "./Pokecard";

export default function Pokedex(props) {
    const { pokemon } = props
    return (
        <div className="container">
            {pokemon.map(pokeData => (
            <Pokecard cardData={pokeData}/>)
            )}
        </div>
    )
}