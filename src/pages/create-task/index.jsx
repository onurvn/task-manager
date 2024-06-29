import { redirect } from "react-router-dom"
import CreateTaskContainer from "../../containers/create-task"
import { addTask } from "../../services/task"

const CreateTaskPage = () => {
    return (
        <CreateTaskContainer />
    )
}

export const createTaskSubmitAction = async ({ request }) => {
    const formData = await request.formData();

    const id = Math.random().toString(36).substring(2, 12);
    const name = formData.get("task-name");
    const description = formData.get("task-description");

    await addTask({
        id,
        name,
        description,
        completed: false
    });

    return redirect(`/tasks/${id}`)
}


export { CreateTaskPage }