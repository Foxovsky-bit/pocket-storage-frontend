import styled from 'styled-components';
import {General} from './../components/employee/General'
import {ActionArchive} from './../components/employee/ActionArchive'
import { DeviceList } from './../components/employee/DeviceList';
export const FlexWrapper = styled.div`
    display:flex;
`;

export const Employee = () => {
    return (
        <>
            <General/>
            <FlexWrapper>
                <ActionArchive/>
                <DeviceList/>
            </FlexWrapper>
        </>
    )
}