import styled from 'styled-components';
import { List } from '../List';
import { Title } from '../employee/ActionArchive'
import { IGood } from '../../interfaces/IGood';

const EmployeesWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:414px;
    margin-bottom:30px;
`;

const Employees:Array<IGood> = [
    {name:"Название товара",sku:"SKU",count:"10"},
    {name:"Название товара",sku:"SKU",count:"20"},
    {name:"Название товара",sku:"SKU",count:"30"},
    {name:"Название товара",sku:"SKU",count:"40"},
    {name:"Название товара",sku:"SKU",count:"50"},
    {name:"Название товара",sku:"SKU",count:"60"},
    {name:"Название товара",sku:"SKU",count:"70"},
    {name:"Название товара",sku:"SKU",count:"80"},
]

export const GoodList = () => {
    return (
        <EmployeesWrapper>
            <Title>Товары</Title>
            <List currentList={Employees} redirect=""/>
        </EmployeesWrapper>
    )
}