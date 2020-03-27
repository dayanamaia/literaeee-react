import React from 'react';

const ListWords = (props) => {
    const {word, link} = props;

    return(
        <>
            <div id="list-words-parent">
                <div className="list-words">
                    <div className="container-list">
                        <ul>
                            <li>
                                <a href={link} className="item">
                                    <span>{word}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListWords;