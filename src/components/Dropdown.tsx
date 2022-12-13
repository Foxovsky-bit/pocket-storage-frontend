import styled from 'styled-components';
import SelectComponent from '../custom/SelectComponent'
import { useState } from 'react';

const options = [
    { key: 1, value: "Должность 1" },
    { key: 2, value: "Должность 2" },
    { key: 3, value: "Должность 3" },
    { key: 4, value: "Должность 4" }
  ];

export const Dropdown = () => {

    const [selectedOption, setSelectedOption] = useState("");

    return (
        <>
            <SelectComponent
                options={options}
                onChange={(item:any) => setSelectedOption(item)}
                selectedKey={selectedOption}
                placeholder={"Должность"}
            />
        </>
    )
}