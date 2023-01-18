import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
    width:calc(100%-120px);
    height:37px;
    border-radius: 0px 0px 35px 35px;
    background-color:white;
    padding: 21.5px 51px;
    display:flex;
    justify-content: space-between;
    margin-bottom: 24px;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
`;

const Logo = styled.img`
    width:37px;
    height:37px;
    margin-right: 29px;
`

const AppName = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    color:black;
`;

const Menu = styled.ul`
    display:flex;
`;

const MenuItem = styled.li`
    font-weight: 400;
    font-size: 24px;
    align-items:center;
    margin-left: 33px;
`;

const AppNameWrapper = styled.div<{authtorized:boolean}>`
    display:flex;
    margin: ${props => !props.authtorized ? "auto" : "0"};
`;

export const Header = (props:{authtorized:boolean}) => {
    return (
        <Wrapper>
            <AppNameWrapper authtorized={props.authtorized}>
                <Logo src={"../img/logo.png"}/>
                <Link to="/">
                    <AppName>
                        Pocket Storage
                    </AppName>
                </Link>
            </AppNameWrapper>
            { props.authtorized &&
            <Menu>
                <Link to={"storages"}>
                    <MenuItem>Склады</MenuItem>
                </Link>
                <Link to={"employees"}>
                    <MenuItem>Сотрудники</MenuItem>
                </Link>
                <Link to={"goods"}>
                    <MenuItem>Товары</MenuItem>
                </Link>
                <Link to="/" onClick={() => localStorage.removeItem('session_key')}>
                    <MenuItem>Выход</MenuItem>
                </Link>
            </Menu>
            }
        </Wrapper>
    )
}