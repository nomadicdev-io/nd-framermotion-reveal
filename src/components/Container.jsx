import { ContainerStyled } from "../styles/Common.styles";

const Container = ({children, fullheight})=> {
    return (
        <ContainerStyled fullheight={fullheight}>
            {children}
        </ContainerStyled>
    )
}

export default Container;