import React, { useState, useEffect } from "react"
import "./PokemonData.css"

function PokemonData({ selectedPokemonName }) {
    const [pokemonData, setPokemonData] = useState()

    useEffect(function() {
        if (selectedPokemonName) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (responseData) {
                    setPokemonData(responseData)
                })
        }
    })

    return (
        pokemonData
            ?
                <div className="PokemonData">
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} width={96} height={96} />
                    <p>Base experience: {pokemonData.base_experience}</p>
                    <p>Height: {pokemonData.height} • Weight: {pokemonData.weight}</p>
                    <p>Type{pokemonData.types?.length > 1 ? "s" : ""}: {pokemonData.types?.map(function(typeData) {
                        return typeData.type.name
                    }).join(" and ")}</p>
                </div>
            :
                <h2>Pokemon information will appear here</h2>
    )
}

export default PokemonData
