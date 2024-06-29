import * as S from "./styles"
import { MdNoteAdd } from "react-icons/md";

const EmptyScreen = () => {
    return (
        <S.EmptyTasks>
            <MdNoteAdd />
            <S.Title>There is no task created yet.</S.Title>
            <S.Subtitle>Click on the button below to create the first one</S.Subtitle>
            <S.Button to="/tasks/create">Create Task</S.Button>
        </S.EmptyTasks>
    )
}

export { EmptyScreen }