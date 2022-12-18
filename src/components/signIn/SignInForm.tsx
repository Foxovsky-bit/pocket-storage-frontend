import styled from 'styled-components';
import { Formik,Field,Form } from 'formik'
import { ISignInFields } from '../../interfaces/ISignInFields';
import { Button } from '../Button';
import { FieldWrapper } from '../createEmployee/CreateEmployeeForm';

export const SignInForm = () => {
    return (
        <>
                <Formik
                initialValues={{
                    login:'',
                    password:'',
                }}
                onSubmit={(
                    values: ISignInFields,
                ) => {
                    console.log(values)
                }}
                >
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="login" name="login" placeholder="Логин"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field className="field" id="password" name="password" placeholder="Пароль" />
                        </FieldWrapper>
                        <Button type="submit" text={"Вход"} img={""} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}></Button>
                        <Button text={"Регистрация"} img={""} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid rgba(169, 62, 207, 1)"} margin={"20"}></Button>
                    </Form>
                </Formik>
        </>
    )
}