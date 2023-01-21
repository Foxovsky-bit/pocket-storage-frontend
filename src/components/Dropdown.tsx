import SelectComponent from '../custom/SelectComponent'
import { useState, useEffect } from 'react';
import { IOption } from '../interfaces/IOption';
import { useSearchParams } from 'react-router-dom';

export const Dropdown = (props:{placeholer:string,options:Array<IOption>}) => {

    const [selectedOption, setSelectedOption] = useState("");
    const [searchOption,setSearchOption] = useSearchParams();

    useEffect(() => {
        setSearchOption({category:selectedOption});
        console.log(searchOption)
    },[selectedOption])

    return (
        <>
            <SelectComponent
                options={props.options}
                onChange={(item:any) => {
                    setSelectedOption(item);
                    console.log(item)
                }}
                selectedKey={selectedOption}
                placeholder={props.placeholer}
            />
        </>
    )
}