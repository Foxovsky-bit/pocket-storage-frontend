import styled from 'styled-components';
import { List } from '../List';
import {Title} from '../employee/ActionArchive'
import { IEmployee } from '../../interfaces/IEmployee';

const EmployeesWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:414px;
    margin-bottom:30px;
`;

const Employees:Array<IEmployee> = [
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
    {fullName:"ФИО",jobTitle:"Должность",device:"Устройтсво"},
]

export const EmployeeList = () => {
    return (
        <EmployeesWrapper>
            <Title>Список сотрудников</Title>
            <List currentList={Employees} redirect="" clickable={false}/>
        </EmployeesWrapper>
    )
}