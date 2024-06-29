import { redirect } from "react-router-dom"
import { TaskEditContainer } from "../../containers/task-edit"
import { getTask, updateTask } from "../../services/task"

const TaskEditPage = () => {

    return (
        <>
            <TaskEditContainer />
        </>
    )
}

export const taskEditPageLoader = async ({ params }) => {
    return getTask(params.id)
}

export const updateTaskAction = async ({ params, request }) => {
    const formData = await request.formData();

    const name = formData.get("task-name");
    const description = formData.get("task-description");
    const completed = formData.get("task-completed");

    const task = {
        name,
        description,
        completed,
        id: params.id
    }

    await updateTask(task);

    return redirect(`/tasks/${params.id}`)

}

export { TaskEditPage }