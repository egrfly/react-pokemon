import React, { useState } from "react"
import PokemonList from "./Components/PokemonList"
import PokemonData from "./Components/PokemonData"
import "./App.css"

function App() {
    const [selectedPokemonName, setSelectedPokemonName] = useState()

    return (
        <main className="App">
            <h1>Pokemon Encyclopedia</h1>
            <PokemonData selectedPokemonName={selectedPokemonName} />
            <PokemonList setSelectedPokemonName={setSelectedPokemonName} />
        </main>
    )
}

export default App
