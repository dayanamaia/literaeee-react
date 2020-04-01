import { useState, useEffect } from 'react';

const useAboutWord = (word) => {
    const [infoWord, setinfoWord] = useState({});

    useEffect(() => {
        const urlAPI = `https://api.pearson.com/v2/dictionaries/brep/entries?headword=${word}`;
        const item = window.localStorage.getItem('list');

        async function fecthData() {

            if(item) {
                setinfoWord(JSON.parse(item));
            } else {
                try{
                    const data = await fetch(urlAPI);
                    const json = await data.json();

                    if(json) {
                        setinfoWord(json.results[0]);
                    }

                } catch(error) {
                    console.log(error);
                }
            }
        }

        fecthData();
    },[word]);

    return infoWord;
}

export default useAboutWord;