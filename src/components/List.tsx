import styled from 'styled-components';
import { IArchieveAction } from '../interfaces/IListItem';
import { IDevice } from '../interfaces/IDevice';
import { IEmployee } from '../interfaces/IEmployee';
import { IGood } from '../interfaces/IGood';

const Item = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    background: #F7F7F7;
    border-radius: 5px;
    height: 19px;
    padding: 8px 21px;
    margin-bottom: 5px;
    display:flex;
    justify-content: space-between;
`;

const  ItemValue = styled.div<{size:number}>`
`;

export const List = (props:{currentList:Array<IArchieveAction | IDevice | IEmployee | IGood>}) => {

    return (
        <>
        {
            props.currentList.map(item => {
                return (
                    <Item>
                        {
                            Object.values(item).map((value) => {
                                return(
                                    <ItemValue size={Object.values(item).length}>{value}</ItemValue>
                                )
                            })
                        }
                    </Item>
                )
            })
        }
        </>
    )
}