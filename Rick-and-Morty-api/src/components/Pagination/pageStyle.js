import styled from "styled-components";

export const ContainerPag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #0e002f;

    ul{
        display: flex;
        flex-direction: row;
        padding: 10px;
        
    }

    li{
        cursor: pointer;
        list-style: none;
        height: 30px;
        margin-bottom: 30px;
        width: 30px;
        color: green;
        background-color: #320139;
        margin: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        border: 1px solid #000000;
    }

    a{
        color: #000000;
        cursor: pointer;
        font-weight: bold;
    
    }

    li:active{
        background-color: #0e002f;
        border: 1px solid #320139;
    }

    .btn{
        width: 50px;
    }

    
`;