import styled from 'styled-components';
import { List } from '../List';
import { Title } from '../employee/ActionArchive'
import { IStorage } from '../../interfaces/IStorage';
import { useState, useEffect} from 'react'
import { getStorages } from '../../requests/getStorages';
import { useSearchParams } from 'react-router-dom';

const StoragesWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:414px;
    margin-bottom:30px;
`;

export const StorageList = () => {

    const [storageList,setStorageList] = useState<Array<IStorage>>([]);
    const [searchParams,setSearchParams] = useSearchParams();

    const query = searchParams.get('search') || ''

    useEffect(() => {
        let storages:Array<IStorage> = [];
        getStorages()
        .then(response =>
            {
                response.result.map((storage:any) => {
                    storages.push({id:storage.id,name:storage.name,redirect:"Редактировать"})
                })
                
                if (query) {
                    storages = storages.filter(
                        (storage:any) => storage.name.includes(query)
                    )
                }

                setStorageList(storages)
            })
    },[searchParams])

    return (
        <StoragesWrapper>
            <Title>Склады</Title>
            <List currentList={storageList} redirect={`../renameStorage`}/>
        </StoragesWrapper>
    )
}