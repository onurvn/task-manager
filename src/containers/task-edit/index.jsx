import { useLoaderData } from "react-router-dom"
import * as S from "./styles"

const TaskEditContainer = () => {
    const task = useLoaderData();

    return (
        <S.TaskEditContainer>
            <S.EditTaskForm method="put">
                <S.BackButton to={`/tasks/${task.id}`}>Back</S.BackButton>
                <S.Title>Edit task</S.Title>
                <input type="text" name="task-name" defaultValue={task.name} />
                <textarea name="task-description" defaultValue={task.description} />
                <label>
                    <input
                        type="checkbox"
                        name="task-completed"
                        defaultChecked={task.completed}
                    />
                    Completed
                </label>
                <S.ChangeButton type="submit">Change</S.ChangeButton>
            </S.EditTaskForm>
        </S.TaskEditContainer>
    )
}



export { TaskEditContainer }