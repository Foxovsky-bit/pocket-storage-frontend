import styled from 'styled-components';
import {useSearchParams} from 'react-router-dom'
import { useEffect, useState } from "react";

const SearchWrapper = styled.div`
    display:flex;
    height: 42px;
    width:60%;
    margin-left:10px;
`;

const Input = styled.input`
    width: 75%;
    padding: 0;
    border-width: 0px;
    height: 42px;
    padding-left: 16px;
    box-sizing: border-box;
    position: relative;
    border-radius: 35px 0 0 35px;
    background: #F7F7F7;
`;

const SearchButton = styled.button`
    width:25%;
    border-radius: 0 35px 35px 0;
    background-color: rgba(169, 62, 207, 1);
    color:white;
    font-family: 'Fira Sans Extra Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    &:hover {
        background-color: rgb(126,34,158)
    }
`;

export const SearchInput = (props:{placeholder:string,category:string}) => {

    const [params,setParams] = useSearchParams();
    const [search,setSearch] = useState<{search:string,category:string}>({search:'',category:''});

    useEffect(() => {
        console.log(search)
        setSearch({category:props.category,search:search.search});
    },[props.category])

    return (
        <>
            <SearchWrapper>
                <Input type="text" placeholder={props.placeholder} onChange={e => setSearch({category:props.category,search:e.target.value})}/>
                <SearchButton onClick={() => setParams(search)}>Поиск</SearchButton>
            </SearchWrapper>
        </>
    )
}