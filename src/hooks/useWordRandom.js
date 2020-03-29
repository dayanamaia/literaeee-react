import { useState, useEffect } from 'react';

const useWordRandom = () => {
    const [listWords, setListWords] = useState([]);

    const numRadom = (num) => Math.floor(Math.random() * num);
    
    useEffect(() => {
        let offset = numRadom(4000);
        const urlAPI = `https://api.pearson.com/v2/dictionaries/brep/entries?offset=${offset}`;
        const item = window.localStorage.getItem('list');

        async function fecthData() {

            if(item) {
                setListWords(JSON.parse(item));
            } else {
                try{
                    const data = await fetch(urlAPI);
                    const json = await data.json();
                    const index = json.results.length;
                    const word = json.results;

                    setListWords(word);
                    window.localStorage.setItem('list', JSON.stringify(word));
                } catch(error) {
                    console.log(error);
                }
            }
        }

        fecthData();
    },[]);

    return listWords;

}

export default useWordRandom;