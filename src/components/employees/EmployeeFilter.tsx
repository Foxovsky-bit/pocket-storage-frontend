import styled from 'styled-components';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import {Title} from '../employee/ActionArchive'
import { SearchInput } from '../SearchInput';

const EmployeeFilterWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    height:173px;
    margin-bottom:30px;
`;

const FlexWrapper = styled.div`
    display:flex;
    margin-top:30px;
    justify-content: space-between;
`;

export const EmployeeFilter = () => {
    return (
        <EmployeeFilterWrapper>
            <Title>Фильтры</Title>
            <Dropdown/>
            <FlexWrapper>
                <Button text={"Добавить сотрудника"} img={"../img/plus.png"} color={"white"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid #A93ECF"} margin={""}></Button>
                <SearchInput/>
            </FlexWrapper>
        </EmployeeFilterWrapper>
    )
}