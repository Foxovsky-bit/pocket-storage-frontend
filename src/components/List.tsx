import styled from 'styled-components';
import { IArchieveAction } from '../interfaces/IListItem';
import { IDevice } from '../interfaces/IDevice';
import { IEmployee } from '../interfaces/IEmployee';
import { IGood } from '../interfaces/IGood';
import { IStorage } from '../interfaces/IStorage';
import { Link } from 'react-router-dom';

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

const Redirect = styled.a`
    text-decoration: underline;
    color:rgba(169, 62, 207, 1);
    cursor: pointer;
    &:hover {
        color: rgb(109, 19, 141);
    }
`;

export const List = (props:{currentList:Array<IArchieveAction | IDevice | IEmployee | IGood | IStorage>,redirect:string}) => {

    return (
        <>
        {
            props.currentList.map((item:any) => {
                return (
                    <Item>
                        {
                            Object.entries(item).map((value:any) => {
                                if (value["0"] === 'redirect') {
                                    return(
                                        <ItemValue size={Object.values(item).length}>
                                            <Link  to={`${props.redirect}/${item.id}`}>
                                                <Redirect>
                                                    {value["1"]}
                                                </Redirect>
                                            </Link>
                                        </ItemValue>
                                    )
                                }
                                else {
                                    if (value["0"] !== 'id') {
                                        return(
                                            <ItemValue size={Object.values(item).length}>{value["1"]}</ItemValue>
                                        )
                                    }
                                }
                            })
                        }
                    </Item>
                )
            })
        }
        </>
    )
}