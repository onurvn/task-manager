import { Link } from "react-router-dom"
import * as S from "./styles"

const NoteFoundContainer = () => {
    return (
        <S.NoteFoundContainer>
            <S.Title>404 - Page you are looking for is missing</S.Title>
            <Link to="/">Go home</Link>
        </S.NoteFoundContainer>
    )
}

export { NoteFoundContainer }