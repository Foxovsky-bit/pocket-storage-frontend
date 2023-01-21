import styled from 'styled-components';
import {Formik,Field,Form,useField} from 'formik'
import { Button } from '../Button';
import { IProductFields } from '../../interfaces/IProductFields';
import { useState, useEffect } from 'react';
import { ICategory } from '../../interfaces/ICategory';
import { getProductCategories } from '../../requests/getProductCategories';
import { addProduct } from '../../requests/addProduct';
import { useNavigate } from "react-router-dom";

export const FieldWrapper = styled.div`
    margin-bottom:30px;
`;

export const AddProductForm = () => {

    const [categories,setCategories] = useState<Array<ICategory>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        let categories:Array<ICategory> = [];
        getProductCategories()
        .then(response => {
                response.result.map((category:any) => {
                    categories.push({id:category.id,name:category.name})
                });
                setCategories(categories)
            })
        console.log(categories)
    },[])

    return (
        <>
                <Formik
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
                    addProduct(values.name,values.SKU,values.barcode,categories.find((elem:ICategory) => elem.name === values.category)!.id)
                    .then(response => {
                        if (response.error) {
                            console.log(response.error) 
                        }
                        else {
                            navigate('../goods')
                        }
                    })
                }}
                >{ ({ values, setFieldValue }) =>
                    <Form>
                        <FieldWrapper>
                            <Field className="field" id="name" name="name" placeholder="Название товара"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field className="field" id="SKU" name="SKU" placeholder="SKU товара" />
                        </FieldWrapper>
                        <FieldWrapper>  
                            <Field className="field" id="barcode" name="barcode" placeholder="Штрих-код товара цифрами"/>
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
                        </FieldWrapper>
                        <Button type="submit" text={"Добавить товар"} img={"../img/edit.png"} color={"rgba(169, 62, 207, 1)"} textColor={"white"} width="380" border={""} margin={""}></Button>
                        <Button type="reset" text={"Отмена"} img={"../img/delete.png"} color={"rgba(255, 255, 255, 1)"} textColor={"rgba(153, 0, 0, 1)"} width="380" border={"2px solid #990000;"} margin={"20"}></Button>
                    </Form>
                }
                </Formik>
        </>
    )
}