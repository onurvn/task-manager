import * as S from "./styles"

import { MENU } from "./constans"

const Navigation = () => {
    return (
        <S.NavigationMenu>
            {MENU.map((item) => (
                <S.NavigationItem key={item.id} to={item.href}>
                    <S.IconWrapper>
                        {item.icon}
                    </S.IconWrapper>
                    <S.Title>{item.title}</S.Title>
                </S.NavigationItem>
            ))}
        </S.NavigationMenu>
    )
}

export { Navigation }