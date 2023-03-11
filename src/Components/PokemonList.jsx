import React, { useState, useEffect } from "react"
import PokemonListItem from "./PokemonListItem.jsx"
import "./PokemonList.css"

function PokemonList({ setSelectedPokemonName }) {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(function() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(function(response) {
                return response.json()
            })
            .then(function(responseData) {
                return setPokemonList(responseData.results)
            })
    })

    return (
        <div className="PokemonList">
            {pokemonList.map(function(pokemon) {
                return <PokemonListItem pokemonName={pokemon.name}
                                        setSelectedPokemonName={setSelectedPokemonName}
                                        key={pokemon.name} />
            })}
        </div>
    )
}

export default PokemonList
