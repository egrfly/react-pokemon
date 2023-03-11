import React from "react"
import "./PokemonListItem.css"

function PokemonListItem({ pokemonName, setSelectedPokemonName }) {
    return (
        <button onClick={function() {
            setSelectedPokemonName(pokemonName)
        }}>{pokemonName}</button>
    )
}

export default PokemonListItem
