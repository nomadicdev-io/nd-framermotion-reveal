import { HeaderImageStyled } from "../styles/Common.styles";

const HeaderImage = ()=> {
    return (
        <HeaderImageStyled>
            <a href="/" title="Website Name">
                <img src="/logo.svg" alt="Website" />
            </a>
        </HeaderImageStyled>
    )
}

export default HeaderImage;