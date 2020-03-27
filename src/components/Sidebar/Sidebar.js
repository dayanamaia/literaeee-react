import React from 'react';
import logo from '../../assets/img/litteraeee-letras.png';

const Sidebar = (props) => {
    const { lang } = props;

    return(
        <>
            <div className="sidebar">
                <div className="container">
                    <img src={logo} className="img-top" alt="Litteraeee" />
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