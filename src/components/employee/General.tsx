import styled from 'styled-components';

const NameWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 35px;
    height: 29px;
    padding: 36px 48px;
    display:flex;
    justify-content: space-between;
    margin-bottom:24px;
`;

const Name = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
`;

const JobTitle = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
`;

export const General = () => {
    return (
        <NameWrapper>
            <Name>Фамилия Имя Отчество</Name>
            <JobTitle>Должность</JobTitle>
        </NameWrapper>
    )
}