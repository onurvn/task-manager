import { useLoaderData, useFetcher } from "react-router-dom"
import * as S from "./styles"
import { Loading } from "../../components/loading";
import { useEffect, useState } from "react";

const TaskDetailContainer = () => {
    const task = useLoaderData();
    const fetcher = useFetcher();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateCompleted = () => {
        setIsSubmitting(true);
        fetcher.submit(null, { method: "put" });
    }

    useEffect(() => {
        setIsSubmitting(false)
    }, [task])

    return (
        <S.TaskDetailContainer>
            <S.EditButton to={`/tasks/${task.id}/edit`}>Edit</S.EditButton>
            <S.TaskDetail>
                <fetcher.Form method="put">
                    <S.Status completed={task.completed}>
                        <input
                            hidden
                            type="checkbox"
                            name="task-completed"
                            onChange={updateCompleted}
                            defaultChecked={task.completed}
                        />
                        {task.completed ? "Completed" : "Not completed"}
                        {isSubmitting && <Loading />}
                    </S.Status>
                </fetcher.Form>
                <S.Name>{task.name}</S.Name>
                <S.Description>{task.description}</S.Description>
            </S.TaskDetail>
        </S.TaskDetailContainer>
    )
}

export { TaskDetailContainer }