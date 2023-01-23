import styled from 'styled-components';
import { Button } from '../Button';

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:366px;
    width: 30%;
    margin-bottom:30px;
`;

const ButtonWrapper = styled.div`
    margin-top:30px;
    margin:auto
`;

const Row = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:24px;
`;

const ItemName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
`; 

const Value = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
`; 

export const ActionGood = (props:{SKU?:string,barcode?:string,remaining?:number}) => {
    return (
        <Wrapper>
            <Row>
                <ItemName>SKU</ItemName>
                <Value>{props.SKU}</Value>
            </Row>
            <Row>
                <ItemName>Штрих-код</ItemName>
                <Value>{props.barcode}</Value>
            </Row>
            <Row>
                <ItemName>Остаток на складах</ItemName>
                <Value>{props.remaining}</Value>
            </Row>
            <ButtonWrapper>
                <Button text={"Редактировать товар"} img={"../../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="280" border={""} margin={""}></Button>
                <Button text={"Удалить товар"} img={"../../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="280" border={"2px solid #990000;"} margin={"20"}></Button>
            </ButtonWrapper>
        </Wrapper>
    )
}