import { Form, Link } from "react-router-dom";
import styled from "styled-components";

export const TaskEditContainer = styled.div``

export const EditTaskForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;

    input,
    textarea {
    border: 1px solid #1d2e3f;
    background-color: #182b4220;
    color: #e2ebf8;
    resize: none;
    padding: 10px;
    outline: none;
  }
`;

export const Title = styled.h2`
    font-size: 20px;
`;

export const BackButton = styled(Link)`
    background-color: #0e325f;
    border-radius: 8px;
    padding: 10px;
`;

export const ChangeButton = styled.button`
    background-color: #0e325f;
`