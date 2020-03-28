import React from 'react';
import { Link } from 'react-router-dom';

const ListWords = (props) => {
    const {word} = props;

    return(
        <>
            <div id="list-words-parent">
                <div className="list-words">
                    <div className="container-list">
                        <ul>
                            <li>
                                <Link to={`/about-word/${word}`} className="item"><span>{word}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListWords;