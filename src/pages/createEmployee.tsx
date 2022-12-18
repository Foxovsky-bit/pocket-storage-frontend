import styled from 'styled-components';
import { Title } from '../components/employee/ActionArchive';
import { CreateEmployeeForm } from '../components/createEmployee/CreateEmployeeForm';

export const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    min-height:300px;
    margin-bottom:30px;
`;
export const FlexWrapper = styled.div`
    display:flex;
`;

export const CreateEmployee = () => {
    return (
        <>
            <FormWrapper>
                <Title>Добавить нового сотрудника</Title>
                <CreateEmployeeForm/>
            </FormWrapper>
        </>
    )
}