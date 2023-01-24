import styled from 'styled-components';
import {Formik,Field,Form} from 'formik'
import { Button } from '../Button';
import { IProductFields } from '../../interfaces/IProductFields';
import { useState, useEffect } from 'react';
import { ICategory } from '../../interfaces/ICategory';
import { getProductCategories } from '../../requests/getProductCategories';
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from '../../requests/updateProduct';
import { Error } from '../addProduct/addProductForm';
import * as yup from 'yup';

export const FieldWrapper = styled.div`
    margin-bottom:30px;
`;

const validationSchema = yup.object().shape({
    name: yup.string().required('Поле должно быть заполнено'),
    SKU: yup.string().required('Поле должно быть заполнено'),
    barcode: yup.string().required('Поле должно быть заполнено'),
    category: yup.string().required('Поле должно быть заполнено'),
})

export const UpdateProductForm = () => {

    const [categories,setCategories] = useState<Array<ICategory>>([]);
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        let categories:Array<ICategory> = [];
        getProductCategories()
        .then(response => {
                response.result.map((category:any) => {
                    categories.push({id:category.id,name:category.name})
                });
                setCategories(categories)
            })
    },[])

    return (
        <>
                <Formik
                validationSchema={validationSchema}
                initialValues={{
                    name:'',
                    SKU:'',
                    barcode:'',
                    category:''
                }}
                onSubmit={(
                    values: IProductFields,
                ) => {
                    console.log(values)
                    updateProduct(values.name,values.SKU,values.barcode,categories.find((elem:ICategory) => elem.name === values.category)!.id,id!)
                    .then(response => {
                        if (response.error) {
                            alert(response.error.message)
                        }
                        else {
                            navigate('../goods')
                        }
                    })
                }}
                >{ ({ errors, touched }) =>
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="name" name="name" placeholder="Название товара"/>
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field className="field" id="SKU" name="SKU" placeholder="SKU товара" />
                            {errors.SKU && touched.SKU ? (
                                <Error>{errors.SKU}</Error>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>  
                            <Field className="field" id="barcode" name="barcode" placeholder="Штрих-код товара цифрами"/>
                            {errors.barcode && touched.barcode ? (
                                <Error>{errors.barcode}</Error>
                            ) : null}
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field as="select" className="select" id="category" name="category">
                            {
                                categories.map((category:ICategory) => {
                                    return (
                                        <option>{category.name}</option>
                                    )
                                })
                            }
                            </Field>
                            {errors.category && touched.category ? (
                                <Error>{errors.category}</Error>
                            ) : null}
                        </FieldWrapper>
                        <Button type="submit" text={"Редактироать товар"} img={"../../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}></Button>
                        <Button type="reset" text={"Очистить"} img={"../../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="380" border={"2px solid #990000;"} margin={"20"}></Button>
                    </Form>
                }
                </Formik>
        </>
    )
}