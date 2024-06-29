import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    svg {
    width: 50px;
    height: 50px;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
`;

export const Subtitle = styled.h3`
    font-size: 15px;;
`;

export const Button = styled(Link)`
    background-color: #56b890;
    border-radius: 8px;
    color: #0e325f;
    padding: 10px 20px;
`;