import { useEffect, useState } from "react";
import api from '../../services/api';
import { Card, Container, CardWrapper, ImageCard } from './style'
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import Header from '../Header/Header';

function Home() {

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [allPersos, setAllPersos] = useState([]);

    const [infoPage, setInfoPage] = useState(0);

    
    useEffect(() => {

        async function homePageCharacters() {

            const response = await api.get(`/character/?page=${page}&name=${search}`)
            
            const dataInfo = response.data.info
            setInfoPage(dataInfo)
            const dataa = response.data.results
            setAllPersos([...dataa, dataa])
            

        }

        homePageCharacters();

    }, [ page, search])



    return (
        <>
        <Header/>
        <Search setPage={setPage} setSearch={setSearch}/>
      <Container>
        
        {allPersos.slice(0, 20).map( (items, index) => (
            <CardWrapper key={index}>
                <Card>
                    <ImageCard src={items.image} alt=""/>
                    <h1>{items.name}</h1>
                    <p>STATUS: {items.status}</p>
                    <p>ESPÉCIE: {items.species}</p>
                    
                </Card>
                
            </CardWrapper>
        ))}
        
      </Container>
      <div>
        <Pagination infoPage={infoPage} page={page} setPage={setPage}/>
      </div>
      </>
      
    );
  }
  
  export default Home;