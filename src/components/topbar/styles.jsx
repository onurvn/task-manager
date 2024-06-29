import styled from "styled-components";

export const Topbar = styled.div`
    grid-area: topbar;
    border-bottom: 1px solid #1d2e3f;
    display: flex;
    justify-content: flex-end;

    & > * {
    border-left: 1px solid #1d2e3f;
    padding-left: 20px;
    padding-right: 20px;
  }
`

