import styled from 'styled-components';
import { Title } from '../components/employee/ActionArchive';
import { UpdateProductForm } from '../components/updateProduct/updateProductForm';

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:300px;
    margin-bottom:30px;
`;

export const UpdateProduct = () => {
    return (
        <>
            <FormWrapper>
                <Title>Редактировать товар</Title>
                <UpdateProductForm/>
            </FormWrapper>
        </>
    )
}