import styled from 'styled-components';
import { Title } from '../components/employee/ActionArchive';
import { RenameStorageForm } from '../components/renameStorage/RenameStorageForm';

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:300px;
    margin-bottom:30px;
`;

export const RenameStorage = () => {
    return (
        <>
            <FormWrapper>
                <Title>Переименовать склад</Title>
                <RenameStorageForm/>
            </FormWrapper>
        </>
    )
}