import styled from "styled-components";

const LoadingStyled = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;

    .overlay_{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
    }

    .logo_{
        position: relative;
        display: block;
        width: 10%;
        height: auto;

        img{
            position: relative;
            display: block;
            width: 100%;
            height: auto;
        }
    }
`;

const MainStyled = styled.main`
    position: relative;
    display: block;
    width: 100%;
    min-height: 90vh;
`;

const BannerStyled = styled.section`
    position: relative;
    display: block;
    width: 100%;
    height: 200vh;
    overflow: hidden;
`;

const BannerInnerStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

const BannerVideoStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    overflow: hidden;
    padding-top: 50vh;
    
    .inner_{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 100%;

    }

    .video_{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    video{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.7;
    }
`;

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 12.5vh;
    padding: 1em 0;
    z-index: 98;

    .header_inner{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }
`;

const HeaderToggleStyled = styled.button`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    grid-gap: 4px;
    background-color: var(--white-color);
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;

    span{
        position: relative;
        display: block;
        width: 22px;
        height: 3px;
        border-radius: 2px;
        background-color: var(--bg-color);
        transform-origin: left;

        &:nth-child(1){
            transform: scaleX(0.5);
        }

        &:nth-child(2){
            transform: scaleX(0.75);
        }
    }
`;

const HeaderImageStyled = styled.div`
    position: relative;
    display: block;
    width: auto;
    height: 100%;

    a{
        position: relative;
        display: block;
        width: auto;
        height: 100%;

        img{
            position: relative;
            display: block;
            width: auto;
            height: 100%;
        }
    }
`;

const HeaderNavStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 2em;

    nav{
        position: relative;
        display: block;

        ul{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            grid-gap: 1em;
            list-style: none;
            padding: 0;

            li{
                position: relative;
                display: block;

                a{
                    position: relative;
                    display: block;
                    font-weight: 500;
                    font-size: calc(var(--font-size) * 1.1);
                    color: var(--text-color);

                    &:hover{
                        color: var(--primary-color);
                    }
                }
            }
        }
    }

`;

const BannerTextStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 50vh;
    padding-top: 12.5vh;
    padding-bottom: 5vw;

    .content_{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        justify-content: flex-end;

        p{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: calc(var(--font-size) * 2);
            margin: 0;
            line-height: 1.5;
            opacity: 0.75;
            overflow: hidden;
            span{
                position: relative;
                display: block;
            }
        }

        h1{
            position: relative;
            display: block;
            margin: 0;
            line-height: 1.5;
            font-size: calc(var(--font-size) * 6);
            color: var(--primary-color);
            overflow: hidden;
            span{
                position: relative;
                display: block;
            }
        }
    }

`;

const ContainerStyled = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: ${({fullheight})=> fullheight ? '100%' : 'auto'};
    max-width: 80%;
    min-width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

export {
    MainStyled,
    BannerStyled,
    BannerInnerStyled,
    BannerVideoStyled,
    LoadingStyled,
    HeaderStyled,
    HeaderToggleStyled,
    HeaderImageStyled,
    HeaderNavStyled,
    BannerTextStyled,
    ContainerStyled
}