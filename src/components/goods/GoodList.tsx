import styled from 'styled-components';
import { List } from '../List';
import { Title } from '../employee/ActionArchive'
import { IGood } from '../../interfaces/IGood';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../../requests/getProducts';

const GoodsWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:414px;
    margin-bottom:30px;
`;

const PropertyWrapper = styled.div`
    border-radius: 5px;
    height: 19px;
    padding: 8px 21px;
    margin-bottom: 5px;
    display:flex;
    justify-content: space-between;
`;

const Property = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    width:25%;
    text-align:center;
`;

export const GoodList = () => {

    const [goodList,setGoodList] = useState<Array<IGood>>([]);
    const [searchParams,setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    useEffect(() => {
        let goods:Array<IGood> = [];
        getProducts(searchQuery,category)
        .then(response =>
            {
                response.result.items.map((good:any) => {
                    goods.push({id:good.id,name:good.name,SKU:good.SKU,barcode:good.barcode,category:good.category.name})
                })

                setGoodList(goods)
            })
    },[searchParams])

    return (
        <GoodsWrapper>
            <Title>Товары</Title>
            <PropertyWrapper>
                <Property>Название</Property>
                <Property>SKU</Property>
                <Property>Штрих-код</Property>
                <Property>Категория</Property>
            </PropertyWrapper>
            <List currentList={goodList} redirect="" clickable={true}/>
        </GoodsWrapper>
    )
}