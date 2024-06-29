import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const TaskDetailContainer = styled.section``;

export const TaskDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    margin-top: 20px;
`;

export const Name = styled.h2`
    font-size: 25px;
`;

export const Description = styled.p`
    font-weight: 500;
`;

export const Status = styled.label`
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 13px;   
    padding: 8px;

    ${({ completed }) => css`
    color: ${completed ? "#56b890" : "#bc5050"};
    background-color: ${completed ? "#0cdd745d" : "#7b1e1b7c"};
  `}
`;

export const EditButton = styled(Link)`
    background-color: #0e325f;
    border-radius: 8px;
    padding: 10px;
`;
