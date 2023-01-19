import styled from 'styled-components';
import { List } from '../List';
import { IArchieveAction } from '../../interfaces/IListItem';

const ArchiveWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:366px;
    width: 68%;
    margin-bottom:30px;
    margin-right:19px;
`;

export const Title = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    margin-bottom:30px;
`;

const ArchieveAction:Array<IArchieveAction> = [
    {actionType:"Тип действия",sellNumber:"Номер ячейки",Date:"Дата"},
    {actionType:"Тип действия",sellNumber:"Номер ячейки",Date:"Дата"},
    {actionType:"Тип действия",sellNumber:"Номер ячейки",Date:"Дата"},
    {actionType:"Тип действия",sellNumber:"Номер ячейки",Date:"Дата"},
]

export const ActionArchive = () => {
    return (
        <ArchiveWrapper>
            <Title>Архив дейстий сотрудника</Title>
            <List currentList={ArchieveAction} redirect=""/>
        </ArchiveWrapper>
    )
}