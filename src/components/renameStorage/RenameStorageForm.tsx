import styled from 'styled-components';
import {Formik,Field,Form,useField} from 'formik'
import { IStorageFields } from '../../interfaces/IStorageFields';
import { Button } from '../Button';
import { useNavigate,useParams } from "react-router-dom";
import { renameStorage } from  '../../requests/renameStorage';
import { Error } from '../addProduct/addProductForm';
import * as yup from 'yup';

export const FieldWrapper = styled.div`
    margin-bottom:30px;
`;

const validationSchema = yup.object().shape({
    name: yup.string().required('Поле должно быть заполнено'),
})

export const RenameStorageForm = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    return (
        <>
                <Formik
                validationSchema={validationSchema}
                initialValues={{
                    name:''
                }}
                onSubmit={(
                    values: IStorageFields,
                ) => {
                    renameStorage(values.name,id!)
                    .then(response => {
                        if (response.error) {
                            alert(response.error.message) 
                        }
                        else {
                            navigate('../storages')
                        }
                    })
                }}
                >{ ({ errors, touched }) =>
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="name" name="name" placeholder="Новое название склада"/>
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : null}
                        </FieldWrapper>
                        <Button type="submit" text={"Редактировать склад"} img={"../../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}></Button>
                        <Button type="reset" text={"Очистить"} img={"../../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="380" border={"2px solid #990000;"} margin={"20"}></Button>
                    </Form>
                }
                </Formik>
        </>
    )
}