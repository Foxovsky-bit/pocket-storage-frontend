import styled from 'styled-components';
import { IOption } from '../../interfaces/IOption';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import {Title} from '../employee/ActionArchive'
import { SearchInput } from '../SearchInput';
import { Link } from 'react-router-dom';

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

export const jobTitles:Array<IOption> = [
    { key: 1, value: "Должность 1" },
    { key: 2, value: "Должность 2" },
    { key: 3, value: "Должность 3" },
    { key: 4, value: "Должность 4" }
];

export const EmployeeFilter = () => {
    return (
        <EmployeeFilterWrapper>
            <Title>Фильтры</Title>
            <Dropdown placeholer={"Должность"} options={jobTitles}/>
            <FlexWrapper>
                <Link to="/createEmployee">
                    <Button text={"Добавить сотрудника"} img={"../img/plus.png"} color={"white"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid #A93ECF"} margin={""}></Button>
                </Link>
                <SearchInput/>
            </FlexWrapper>
        </EmployeeFilterWrapper>
    )
}