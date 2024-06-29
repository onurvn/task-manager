import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { HomePage } from "../pages/home-page";
import { TaskPage, taskPageLoader } from "../pages/tasks-page";
import { CreateTaskPage, createTaskSubmitAction } from "../pages/create-task";
import { TaskDetailPage, taskDetailPageLoader, updateTaskDetailAction } from "../pages/task-detail";
import { TaskEditPage, taskEditPageLoader, updateTaskAction } from "../pages/edit-page";
import NoteFoundPage from "../pages/not-found";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                errorElement: <h2>Error</h2>,
                children: [
                    {
                        path: "/",
                        element: <HomePage />
                    },
                    {
                        path: "/tasks",
                        element: <TaskPage />,
                        loader: taskPageLoader
                    },
                    {
                        path: "/tasks/create",
                        element: <CreateTaskPage />,
                        action: createTaskSubmitAction
                    },
                    {
                        path: "/tasks/:id",
                        element: <TaskDetailPage />,
                        loader: taskDetailPageLoader,
                        action: updateTaskDetailAction
                    },
                    {
                        path: "/tasks/:id/edit",
                        element: <TaskEditPage />,
                        loader: taskEditPageLoader,
                        action: updateTaskAction
                    },
                    {
                        path: "/*",
                        element: <NoteFoundPage />
                    },
                ]
            }
        ]
    },
])