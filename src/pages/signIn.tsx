import { FormWrapper } from './createEmployee';
import { Title } from '../components/employee/ActionArchive';
import { SignInForm } from '../components/signIn/SignInForm';
import { Header } from '../components/Header';


export const SingIn = () => {
    return (
        <>
            <Header authtorized={false}/>
            <FormWrapper>
                <Title>Вход</Title>
                <SignInForm/>
            </FormWrapper>
        </>
    )
}