import * as S from "./styles"
import { Logo } from "../logo"
import { Navigation } from "../navigation"
const Sidebar = () => {
    return (
        <>
            <S.Sidebar>
                <Logo />
                <Navigation />
            </S.Sidebar>
        </>
    )
}

export { Sidebar }