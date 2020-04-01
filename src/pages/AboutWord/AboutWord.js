import React from 'react';
import { useParams } from 'react-router';
import useAboutWord from '../../hooks/useAboutWord';

const AboutWord = () => {
    const { word } = useParams();
    
    const { 
        headword, 
        part_of_speech,
        pronunciations: [{ipa, lang}] = [{ipa: '', lang: ''}],
        senses
    } = useAboutWord(word);

    return(
        <>
            <div className="modal-word">
                <div className="btn-close"><span title="fechar">X</span></div>
                <div className="modal-container">
                    <div className="modal-content">
                        <p>
                            <span className="category">palavra</span>
                            <span className="word">{headword}</span>
                            <span className="pronounce"> - {ipa}</span>
                            <span> {part_of_speech} - {lang}</span>
                        </p>
                        {senses && senses[0].translations &&
                        <>
                            <div className="box-translate">
                                <p className="title-translate">
                                    {senses[0].translations[0].example[0].text}
                                    <span>{senses[0].translations[0].example[0].translation.text}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="category">tradução</span>
                                    {senses[0].translations[0].text}
                                </p>
                            </div>
                        </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutWord;