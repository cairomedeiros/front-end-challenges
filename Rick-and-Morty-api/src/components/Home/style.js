import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0e002f;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const CardWrapper = styled.div`
    
    margin: 10px;
    border-radius: 10px;

`;

export const Card = styled.section`
width: 300px;
    height: 400px;
    background-color: #341931;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid #000000;

    
    

    h1, p{
        color: #000000;
        
        padding-left: 25px;
        line-height: 30px;
    }
    
    
    
`;
export const ImageCard = styled.img`
   width: 250px;
   height: 250px;
   border-radius: 200px;
   margin-top: 10px;
   margin-bottom: 5px;
   align-self: center;
   border: 1px solid #000000;
    
`;
