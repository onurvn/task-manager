import styled from "styled-components";

export const Main = styled.main`
    grid-area: main;
    padding: 20px;
    opacity: ${({ isLoading }) => isLoading ? 0.3 : 1};
`

