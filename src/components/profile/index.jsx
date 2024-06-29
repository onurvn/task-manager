import * as S from "./styles"

const Profile = () => {
    return (
        <S.ProfileButton>
            <S.Image src="https://avatars.githubusercontent.com/u/118551340?s=400&u=db44dbe21f1f9f820f65e7803f21678f6ddc7e24&v=4" />
            <S.Content>
                <S.Subtitle>Admin</S.Subtitle>
            </S.Content>
        </S.ProfileButton>
    )
}

export { Profile }