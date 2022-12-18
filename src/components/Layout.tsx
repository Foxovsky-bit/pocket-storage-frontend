import styled from 'styled-components';
import {Header} from '../../src/components/Header'
import {Outlet} from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <Header authtorized={true}/>
            <Outlet/>
        </>
    )
}