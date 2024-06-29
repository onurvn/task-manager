import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const NavigationItem = styled(NavLink)`
    border-radius: 8px;
    color:#7c859e;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    transition: .5s all ease;   

    &.active,
    &:hover{
        background-color: #3f906f1f;
        color: #fff;
    }
`
export const IconWrapper = styled.div`
    display: inline-flex;

    svg{
        height: 20px;
        width: 20px;
    }
`
export const Title = styled.p`

`