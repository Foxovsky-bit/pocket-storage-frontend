import styled from 'styled-components';
import { GoodFilter } from '../components/goods/GoodFilter';
import { GoodList } from '../components/goods/GoodList';

export const Goods = () => {
    return (
        <>
            <GoodFilter/>
            <GoodList/>
        </>
    )
}