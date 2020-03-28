import React from 'react';
import useWordRandom from '../../hooks/useWordRandom';
import ListWords from '../../components/ListWords/ListWords';

const Home = () => {
    const listWords = useWordRandom();
    console.log(listWords);
    return(
        <>
            {listWords && listWords.map(({headword, id}) => 
                <ListWords key={id} word={headword} />
            )}
        </>
    )
}

export default Home;