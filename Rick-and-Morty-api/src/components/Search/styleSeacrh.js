import styled from "styled-components";


export const FormsContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0e002f;
    

    flex-direction: column;

    h1{
        margin-top: -80px;
        padding: 20px;
        color: #000000;
        -webkit-text-stroke: 1px #341931;
    }

    

    input{
        width: 400px;
        height: 30px;
        border: 0;
        border-radius: 5px;
        outline: none;
        padding: 5px;
        
        
    }

    button{
        background-color: #0e002f;
        border: #0e002f;
        margin-left: 10px;
        cursor: pointer;
        
        
    }

    .searchicon{
        width: 30px;
        height: 30px;
        margin-bottom: -10px;
    }

`;