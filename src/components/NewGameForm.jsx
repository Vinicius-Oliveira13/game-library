import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({ addGames }) {

    const [title, setTitle] = useState('')
    const [coverImage, setCoverImage] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGames({ title, coverImage })
        setTitle("")
        setCoverImage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput id="title" label="Título" value={title} setValue={setTitle} />
            <TextInput id="cover" label="URL da capa" value={coverImage} setValue={setCoverImage} />
            <button type="submit">Adicionar jogo à biblioteca</button>
        </form>
    )
}