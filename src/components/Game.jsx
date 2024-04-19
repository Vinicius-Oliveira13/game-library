export default function Game ({title, coverImage, onRemove }){
    return (
        <div className="game">
            <img src={coverImage} alt={title} />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>Remover</button>
            </div>
          </div>
    )
}