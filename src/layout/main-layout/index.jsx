import * as S from "./styles"

import { Sidebar } from "../../components/sidebar"
import { Topbar } from "../../components/topbar"
import { Main } from "../../components/main"

const MainLayout = () => {
    return (
        <S.MainLayout>
            <Sidebar />
            <Topbar />
            <Main />
        </S.MainLayout>
    )
}

export { MainLayout }