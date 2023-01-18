import { StorageFilter } from '../components/storages/StorageFilter';
import { StorageList } from '../components/storages/StorageList';

export const Storages = () => {
    return (
        <>
            <StorageFilter/>
            <StorageList/>
        </>
    )
}