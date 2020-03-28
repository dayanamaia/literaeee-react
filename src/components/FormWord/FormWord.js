import React from 'react';

const FormWord = (props) => {
    const {nextLetter} = props;

    return(
        <>
            <div id="container-form-parent">
                <div className="container-form">
                    <form className="form-word">
                        <label htmlFor="input_word">Digite uma palavra em Inglês começando com a letra: 
                            <span className="next-letter">{nextLetter}</span>
                        </label>
                        <input type="text" name="input_word" id="input_word" autoFocus autoComplete="off" autoCapitalize="none" />
                        <p className="is-error line-error">Comece com a letra {nextLetter}</p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormWord;