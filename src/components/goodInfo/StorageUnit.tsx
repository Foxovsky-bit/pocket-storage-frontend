import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStorageUnits } from '../../requests/getStorageUnits';
import { List } from '../List';
import { useParams } from 'react-router-dom';
import { getStorages } from '../../requests/getStorages';
import { IWarehouses } from '../../interfaces/IWarehouses';

const StorageName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    margin-bottom:15px;
    color: #A93ECF;
`;


export const StorageUnit = () => {

    const {id} = useParams()
    const [warehouses,setWarehouses] = useState<Array<IWarehouses>>([]);

    useEffect(() => {
        let warehouses:Array<IWarehouses> = []
        getStorages()
        .then(
            response => {
                response.result.map((warehouse:IWarehouses) => {
                    warehouses.push({name:warehouse.name,id:warehouse.id,units:[]})
                })
                return warehouses;
            }
        ).then(
            warehouses => {
                getStorageUnits(id!)
                .then(response => {
                    response.result.items.map((unit:any) => {
                        if (unit.warehouse.id === warehouses.find(elem => elem.id === unit.warehouse.id)!.id) {
                            warehouses.find(elem => elem.id === unit.warehouse.id)!.units
                            .push({unitNumber:unit.ext_id,createDate:`${new Date(unit.created_at).getDate()}-${new Date(unit.created_at).getMonth()+1}-${new Date(unit.created_at).getFullYear()}`})
                        }
                    })
                    setWarehouses(warehouses)
                });
            }
        )
    },[])

    return (
        <>
            {
                warehouses.map((warehouse) => {
                    return (
                        <>  
                            <StorageName>Склад: {warehouse.name}</StorageName>
                            <List currentList={warehouse.units} redirect="" clickable={false}/>
                        </>
                    )
                })
            }
        </>
    )
}