import styled from 'styled-components';
import { Button } from '../Button';
import {Title} from '../employee/ActionArchive'
import { SearchInput } from '../SearchInput';
import { Link } from 'react-router-dom';

const StorageFilterWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    height:110px;
    margin-bottom:30px;
`;

const FlexWrapper = styled.div`
    display:flex;
    margin-top:30px;
    justify-content: space-between;
`;

export const StorageFilter = () => {
    return (
        <StorageFilterWrapper>
            <Title>Фильтры</Title>
            <FlexWrapper>
                <Link to={"../createStorage"}>
                    <Button text={"Добавить склад"} img={"../img/plus.png"} color={"white"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid #A93ECF"} margin={""}></Button>
                </Link>
                <SearchInput placeholder={"Введите название склада"} category=''/>
            </FlexWrapper>
        </StorageFilterWrapper>
    )
}