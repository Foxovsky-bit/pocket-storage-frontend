import styled from 'styled-components';
import { IOption } from '../../interfaces/IOption';
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

const Row = styled.div`
    display:flex;
    width:60%;
    justify-content: space-between;
`;

const storages:Array<IOption> = [
    { key: 1, value: "Склад 1" },
    { key: 2, value: "Склад 2" },
    { key: 3, value: "Склад 3" },
    { key: 4, value: "Склад 4" }
];

const tags:Array<IOption> = [
    { key: 1, value: "Тег 1" },
    { key: 2, value: "Тег 2" },
    { key: 3, value: "Тег 3" },
    { key: 4, value: "Тег 4" }
];

const toggleArchive:Array<IOption> = [
    { key: 1, value: "Показывать архивные" },
    { key: 2, value: "Не показывать архивные" },
];

export const GoodFilter = () => {
    return (
        <EmployeeFilterWrapper>
            <Title>Фильтры</Title>
            <FlexWrapper>
                <Dropdown placeholer={"Склад"} options={storages}/>
                <Row>
                    <Dropdown placeholer={"Тег"} options={tags}/>
                    <Dropdown placeholer={"Показывать архив?"} options={toggleArchive}/>
                </Row>
            </FlexWrapper>
            <FlexWrapper>
                <Button text={"Добавить товар"} img={"../img/plus.png"} color={"white"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid #A93ECF"} margin={""}></Button>
                <SearchInput/>
            </FlexWrapper>
        </EmployeeFilterWrapper>
    )
}