import styled from "styled-components";

export const MainLayout = styled.div`
    display: grid;
    grid-template-areas: "sidebar topbar" "sidebar main";
    grid-template-columns:350px 1fr;
    grid-template-rows: 70px 1fr;
    height: 100%;
`
