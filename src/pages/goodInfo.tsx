import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ActionGood } from '../components/goodInfo/ActionGood';
import { StorageUnit } from '../components/goodInfo/StorageUnit';
import { IProductFields } from '../interfaces/IProductFields';
import { IStorage } from '../interfaces/IStorage';
import { getProduct } from '../requests/getProduct';
import { getStorageUnits } from '../requests/getStorageUnits';

export const FlexWrapper = styled.div`
    display:flex;
`;

const Name = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-size: 40px;
    font-weight:400;
    padding: 19px 5px;
`;

const GoodInfoWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:414px;
    margin-bottom:30px;
    margin-right:19px;
    width: 68%;
`;

const Title = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    margin-bottom:30px;
`;


export const GoodInfo = () => {

    const {id} = useParams()
    const [product,setProduct] = useState<IProductFields>();
    const [remaining,setRemaining] = useState<number>();

    useEffect(() => {
        getProduct(id!)
        .then(response => {
            setProduct({name:response.result.name,SKU:response.result.SKU,barcode:response.result.barcode,category:''})
        })
        getStorageUnits(id!)
        .then(response => {
            setRemaining(response.result.items.length)
        })
    },[])

    return (
        <>
        <Name>{product?.name.toUpperCase()}</Name>
            <FlexWrapper>
                <GoodInfoWrapper>
                    <Title>Наличие товара</Title>
                    <StorageUnit/>
                </GoodInfoWrapper>
                <ActionGood barcode={product?.barcode} SKU={product?.SKU} remaining={remaining}/>
            </FlexWrapper>
        </>
    )
}