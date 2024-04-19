import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        const savedGames = localStorage.getItem('game-lib')
        return savedGames ? JSON.parse(savedGames) : [] // if savedGames is null, return an empty array
    })

    const addGames = ({ title, coverImage }) => {
        const id = Math.floor(Math.random() * 10000)
        const game = { id, title, coverImage }
        setGames(state => {
            const newState = [...state, game]
            localStorage.setItem('game-lib', JSON.stringify(newState))
            return newState
        })
    }

    const removeGame = (id) => {
        setGames(state => {
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem('game-lib', JSON.stringify(newState))
            return newState
        })
    }
    return { games, addGames, removeGame }
}