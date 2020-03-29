import React from 'react';
import useWordRandom from '../../hooks/useWordRandom';
import ListWords from '../../components/ListWords/ListWords';

const Home = () => {
    const listWords = useWordRandom();
    
    return(
        <>
            {listWords && listWords.length > 0 
            ? <ListWords listWords={listWords} /> 
            : <p>nenhuma palavra encontrada</p>
            }
        </>
    )
}

export default Home;