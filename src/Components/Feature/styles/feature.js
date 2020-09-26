
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 165px 45px;
`;

export const Title = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 600;
    margin: auto;
    
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;
    
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Developer = styled.h5`
    color: white;
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto;
    
    @media (max-width: 600px) {
        font-size: 10px;
    }
    
    a{
        text-decoration:underline white;
        color:white;
        font-weight:600;
        cursoor:pointer;
    }

    a:hover{
        color:#888888;
        text-decoration:none;
    }
`;