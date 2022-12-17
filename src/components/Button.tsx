import styled from 'styled-components';

const ActiveButton = styled.button<{color:string,width:string,textColor:string,border:string,margin:string}>`
    background-color:${props => props.color};
    color:${props => props.textColor};
    width:${props => props.width}px;
    border:${props => props.border};
    margin-top:${props => props.margin}px;
    &:hover {
        background-color:${props => props.color === "rgba(169, 62, 207, 1)" ? "rgb(126,34,158)" : "rgb(230,230,230)"};
    }
    height:42px;
    border-radius: 35px;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    display:block;
`;

const ButtonText = styled.div`
    height:100%
`;

const ContentWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    height:20px;
    width:20px;
    margin-right:15px;
`

export const Button = (props:{text:string,color:string,img:string,width:string,textColor:string,border:string,margin:string,type?:"button" | "submit" | "reset" | undefined}) => {
    return (
        <ActiveButton type={props.type} color={props.color} width={props.width} textColor={props.textColor} border={props.border} margin={props.margin}>
            <ContentWrapper>
                <Img src={props.img}/>
                <ButtonText>
                    {props.text}
                </ButtonText>
            </ContentWrapper>
        </ActiveButton>
    )
}