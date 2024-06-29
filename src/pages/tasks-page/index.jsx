import { TasksPageContainer } from "../../containers/tasks-page";
import { getTasks } from "../../services/task";

const TaskPage = () => {

    return (
        <>
            <TasksPageContainer />
        </>
    )
}

export const taskPageLoader = () => {
    return getTasks();
}

export { TaskPage }