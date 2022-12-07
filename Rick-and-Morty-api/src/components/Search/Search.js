import { FormsContainer } from './styleSeacrh'
import { FaSearch } from 'react-icons/fa';


const Search = ({ setPage, setSearch}) => {
    return(
            <FormsContainer>
                <h1>CHARACTERS</h1>
                <form>
                <input
                onChange={(e) =>{
                    setPage(1)
                    setSearch(e.target.value);
                } }
                type="text"
                placeholder="Digite o nome do personagem"
                
                />
                <button onClick={(e) => e.preventDefault()}><FaSearch className="searchicon" /> </button>
                </form>
            </FormsContainer>
    )
}

export default Search;