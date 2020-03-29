import React from 'react';
import { Link } from 'react-router-dom';

const ListWords = (props) => {
    const {listWords} = props;

    return(
        <>
            <div id="list-words-parent">
                <div className="list-words">
                    <div className="container-list">
                        <ul>
                            {listWords && listWords.map(({ id, headword }) =>
                                <li key={id}>
                                    <Link to={`/about-word/${headword}`} className="item"><span>{headword}</span></Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListWords;