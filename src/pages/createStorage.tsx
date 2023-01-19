import styled from 'styled-components';
import { Title } from '../components/employee/ActionArchive';
import { CreateStorageForm } from '../components/createStorage/CreateStorageForm';

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:300px;
    margin-bottom:30px;
`;

export const CreateStorage = () => {
    return (
        <>
            <FormWrapper>
                <Title>Добавить новый склад</Title>
                <CreateStorageForm/>
            </FormWrapper>
        </>
    )
}