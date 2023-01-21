import styled from 'styled-components';
import { Button } from '../Button';
import {Title} from '../employee/ActionArchive'
import { SearchInput } from '../SearchInput';
import { useState,useEffect } from 'react';
import { getProductCategories } from '../../requests/getProductCategories';
import { ICategory } from '../../interfaces/ICategory';
import { Link } from 'react-router-dom';

const EmployeeFilterWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    padding: 36px 48px;
    height:173px;
    margin-bottom:30px;
`;

const FlexWrapper = styled.div`
    display:flex;
    margin-top:30px;
    justify-content: space-between;
`;

const Row = styled.div`
    display:flex;
    width:60%;
    justify-content: space-between;
`;

const Select = styled.select`
    width: 380px;
    border: none;
    border-radius: 35px;
    padding-left: 16px;
    appearance:none;
    background:#F7F7F7 url(../img/arrow.svg) no-repeat right;
    background-position-x: calc(100% - 12px);
    height:42px;
`;

const Option = styled.option`
    
`
const categories:Array<string> = [];

export const GoodFilter = () => {

    const [currentCategory,setCurrentCategory] = useState<string>("");
    const [categories,setCategories] = useState<Array<ICategory>>([]);

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
        <EmployeeFilterWrapper>
            <Title>Фильтры</Title>
            <FlexWrapper>
                <Select onChange={e => {
                        if  (categories.find((category:any) => category.name === e.target.value)) {
                            const current = categories.find((category:any) => category.name === e.target.value);
                            setCurrentCategory(current!.id);
                        }
                        else {
                            setCurrentCategory('');
                        }
                    }}>
                    <Option>Все</Option>
                    {
                        categories.map((category:ICategory) => {
                            return (
                                <Option>{category.name}</Option>
                            )
                        })
                    }
                </Select>
            </FlexWrapper>
            <FlexWrapper>
                <Link to="../addProduct">
                    <Button text={"Добавить товар"} img={"../img/plus.png"} color={"white"} textColor={"rgba(169, 62, 207, 1)"} width="380" border={"2px solid #A93ECF"} margin={""}></Button>
                </Link>
                <SearchInput placeholder={"Введите название или SKU товара"} category={currentCategory}/>
            </FlexWrapper>
        </EmployeeFilterWrapper>
    )
}