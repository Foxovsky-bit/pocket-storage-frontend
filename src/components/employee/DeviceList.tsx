import styled from 'styled-components';
import { List } from '../List';
import { Title } from './ActionArchive'
import { IDevice } from '../../interfaces/IDevice';
import { Button } from '../Button';

const DeviceWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:366px;
    width: 30%;
    margin-bottom:30px;
`;

const ButtonWrapper = styled.div`
    margin-top:30px;
`;

const Devices:Array<IDevice> = [
    {deviceName:"Device 1"},
    {deviceName:"Device 2"},
    {deviceName:"Device 3"},
]

export const DeviceList = () => {
    return (
        <DeviceWrapper>
            <Title>Девайсы</Title>
            <List currentList={Devices} redirect=""/>
            <ButtonWrapper>
                <Button text={"Редактировать сотрудника"} img={"../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="280" border={""} margin={""}></Button>
                <Button text={"Удалить сотрудника"} img={"../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="280" border={"2px solid #990000;"} margin={"20"}></Button>
            </ButtonWrapper>
        </DeviceWrapper>
    )
}