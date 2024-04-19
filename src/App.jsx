import Game from './components/Game'
import NewGameForm from './components/NewGameForm'
import useGameCollection from './hooks/useGameCollection'

function App() {
  const { games, addGames, removeGame } = useGameCollection()

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      < NewGameForm addGames={addGames} />
      <div className="games">
        {games.length > 0
          ? games.map(game => (
            <Game
              key={game.id}
              {...game} // or title={game.title} coverImage={game.coverImage}
              onRemove={() => removeGame(game.id)}
            />
          ))
          : ( <h2>Ainda não tem nada aqui. Tente adicionar algum jogo!</h2>
          )}
      </div>
    </div>
  )
}

export default App
