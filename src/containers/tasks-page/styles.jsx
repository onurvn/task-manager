import { Link } from "react-router-dom";
import styled from "styled-components";

export const TasksPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const TasksList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 7px;
`;

export const TaskListItem = styled.li`

`;

export const Task = styled(Link)`
    background-color: #073972;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 12px;

    border-left: 3px solid
        ${({ isCompleted }) => (isCompleted ? "#56b890" : "#c40c09")};
`;

export const TaskName = styled.h2`
    font-weight: bold;
`;

export const TaskDescription = styled.p`
    font-weight: 500;
`;

export const TaskCompleted = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

export const Button = styled(Link)`
    background-color: #56b890;
    border-radius: 7px;
    color: #000;
    padding: 10px 20px;
`;
