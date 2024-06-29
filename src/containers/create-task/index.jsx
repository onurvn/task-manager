import * as S from "./styles"
import { Form } from "react-router-dom"

const CreateTaskContainer = () => {
    return (
        <S.CreateTaskContainer>
            <Form method="post">
                <input type="text" name="task-name" placeholder="Task name" />
                <textarea name="task-description" placeholder="Description" />
                <button type="submit">Submit</button>
            </Form>
        </S.CreateTaskContainer>
    )
}

export default CreateTaskContainer 