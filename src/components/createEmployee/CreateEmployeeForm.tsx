import styled from 'styled-components';
import {Formik,Field,Form,useField} from 'formik'
import { IEmployeeFields } from '../../interfaces/IEmployeeFields';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { jobTitles } from '../employees/EmployeeFilter';

const FormWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    height:461px;
    margin-bottom:30px;
`;

const FieldWrapper = styled.div`
    margin-bottom:30px;
`;

export const CreateEmployeeForm = () => {
    return (
        <>
                <Formik
                initialValues={{
                    firstname:'',
                    surname:'',
                    middlename:'',
                    jobTitle:''
                }}
                onSubmit={(
                values: IEmployeeFields,
                ) => {
                    console.log(values)
                }}
                >
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="surname" name="surname" placeholder="Фамилия"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field className="field" id="firstname" name="firstname" placeholder="Имя" />
                        </FieldWrapper>
                        <FieldWrapper>  
                            <Field className="field" id="middlename" name="middlename" placeholder="Отчество"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Dropdown options={jobTitles} placeholer="Должность"/>
                        </FieldWrapper>
                        <Button type="submit" text={"Добавить сотрудника"} img={"../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}></Button>
                        <Button type="reset" text={"Отмена"} img={"../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="380" border={"2px solid #990000;"} margin={"20"}></Button>
                    </Form>
                </Formik>
        </>
    )
}