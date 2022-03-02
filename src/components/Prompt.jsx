import { useEffect, useState } from 'react';

import word from './Word';

const Prompt = props => {

    const appWord = word();
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    function createDashesFromLetters(appWord, input){
        let dashes ='';
        
        for (let i = 0; i < appWord.length; i++) {
            
            if (input.indexOf(appWord[i]) > -1){
                dashes+=appWord[i];
            }
            else{
                dashes += '-';
            }
        }
        return dashes
    }

    const inputHandler = e => {
        setInput(e.target.value);
    }

    useEffect(() => {
        if(input !== appWord) {
            setIsValid(false)
        }
        else {
            console.log('');
            setIsValid(true);
        }
    }, [input]);

    return (
        <>
        <h1>Word Guesser App</h1>
            <form>
                <label>Guess the correct Word </label>
                <input
                type="text"
                id="input"
                onChange={inputHandler}
                value={input}
                />
            </form>
            <div>{createDashesFromLetters(appWord, input)}</div>
            <p><span style={isValid ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'red'}}>{isValid ? 'Congratulations on your win!' : 'Bad Guess'}</span></p>
        </>
    );
};

export default Prompt;