import { TaskDetailContainer } from "../..//containers/task-detail/"
import { completeTask, getTask } from "../../services/task"

const TaskDetailPage = () => {
    return <TaskDetailContainer />

}

export const taskDetailPageLoader = async ({ params }) => {
    return getTask(params.id);
}

export const updateTaskDetailAction = async ({ params }) => {
    return completeTask(params.id)
}

export { TaskDetailPage }