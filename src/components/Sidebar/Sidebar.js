import React, { useState } from 'react';
import logo from '../../assets/img/litteraeee-letras.png';
import logoGif from '../../assets/img/litteraeee-letras.gif';

const Sidebar = (props) => {
    const {lang} = props;
    const [img, setImg] = useState(logo);

    const hoverChangeLogo = () => {
        setImg(logoGif);
    }

    const outChangeLogo = () => {
        setImg(logo);
    }

    return(
        <>
            <div className="sidebar">
                <div className="container">
                    <img src={img} className="img-top" alt="Litteraeee" onMouseOver={hoverChangeLogo} onMouseOut={outChangeLogo} />
                    <h1 className="title-logo">Litteraeee!</h1>
                    <div className="description">
                        <h3 className="description-title">Pratique o vocabulário:</h3>
                        <p className="lang-choose">{lang}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;