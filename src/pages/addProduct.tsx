import styled from 'styled-components';
import { Title } from '../components/employee/ActionArchive';
import { AddProductForm } from '../components/addProduct/addProductForm';

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:300px;
    margin-bottom:30px;
`;

export const AddProduct = () => {
    return (
        <>
            <FormWrapper>
                <Title>Добавить новый  товар</Title>
                <AddProductForm/>
            </FormWrapper>
        </>
    )
}