import styled from 'styled-components';
import SelectComponent from '../custom/SelectComponent'
import { useState } from 'react';
import { IOption } from '../interfaces/IOption';

export const Dropdown = (props:{placeholer:string,options:Array<IOption>}) => {

    const [selectedOption, setSelectedOption] = useState("");

    return (
        <>
            <SelectComponent
                options={props.options}
                onChange={(item:any) => setSelectedOption(item)}
                selectedKey={selectedOption}
                placeholder={props.placeholer}
            />
        </>
    )
}