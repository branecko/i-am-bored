import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

    const [ activity, setActivity ] = useState('Share positive feedback about your great React teachers. 🙌')

    // funkcia na stiahnutie dat zo serverov boredapi.com
    const getActivityFromServer = async () => {
        // volania pomocou axios trvaju dlhsie, programujeme ich asynchronne
        // 'await' hovori aby nas program cakal na tomto mieste kym sa nevrati response (odpoved)
        // response moze obsahovat data alebo error (ak sa nieco nepodarilo)
        const response = await axios.get('https://www.boredapi.com/api/activity');
        console.log('data', response.data);

        // pred ulozenim dat do stavu useState ich overime
        if (response.data.activity) {
            setActivity(response.data.activity);
        }
    }

    useEffect(
        () => {
            // stiahneme data po 1. vyrenderovani aplikacie
            getActivityFromServer();
        },
        [] // pokial nic nie je v tejto zatvorke, funkcia vyssie sa vykona 1x po prvom vyrenderovani komponentu
    );

    return (
        <div>
            <h1>I am so bored...</h1>
            <h2>What can I do?</h2>
            <p>{activity}</p>
            <div>
                <button onClick={getActivityFromServer}>
                    Next activity
                </button>
                <button onClick={() => { setActivity('I am not bored anymore') }}>
                    I'm not bored anymore
                </button>
            </div>
        </div>
    );
}

export default App;