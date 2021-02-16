const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export default function Pokecard(props) {
    const { cardData } = props;

    const imgSrc = `${POKE_API}${cardData.id}.png`;
    return (
        <div className="pokecard">
            <h1 className="pokecard__name">{cardData.name}</h1>
            <img className="pokecard__img" src={imgSrc} alt={cardData.name} />
            <div className="pokecard__stats">
                Type: {cardData.type} 
                <br></br>
                EXP: {cardData.base_experience}
            </div>

        </div>
    )
}