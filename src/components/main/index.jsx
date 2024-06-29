import { Outlet, useNavigation } from "react-router-dom"
import * as S from "./styles"

const Main = () => {
    const navigation = useNavigation();

    return (
        <S.Main element="main" isLoading={navigation.state !== "idle"}>
            <Outlet />
        </S.Main>
    )
}

export { Main }