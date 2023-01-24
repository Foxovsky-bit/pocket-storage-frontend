import styled from 'styled-components';
import { Formik,Field,Form } from 'formik'
import { ISignInFields } from '../../interfaces/ISignInFields';
import { Button } from '../Button';
import { FieldWrapper } from '../createEmployee/CreateEmployeeForm';
import { login } from '../../requests/login';
import { useNavigate } from "react-router-dom";

export const SignInForm = () => {

    const navigate = useNavigate();

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
                    login(values.login,values.password)
                    .then(response => {
                        if (response.error) {
                            console.log(response.error) 
                        }
                        else {
                            localStorage.setItem('session_key',JSON.stringify(response.result.session_key));
                            navigate('../authorized/goods')
                        }
                    })
                }}
                >
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="login" name="login" placeholder="Логин"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field type="password" className="field" id="password" name="password" placeholder="Пароль" />
                        </FieldWrapper>
                        <Button type="submit" text={"Вход"} img={""} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}/>
                    </Form>
                </Formik>
        </>
    )
}