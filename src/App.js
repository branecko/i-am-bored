import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import myBoredImage from './bored.jpg';
import myHappyImage from './happy.jpeg';
import './App.css';

const App = () => {

    const [ activity, setActivity ] = useState('Share positive feedback about your great React teachers. 🙌')

    // funkcia na stiahnutie dat zo serverov boredapi.com
    const getActivityFromServer = useCallback(
        async () => {
            // volania pomocou axios trvaju dlhsie, programujeme ich asynchronne
            // 'await' hovori aby nas program cakal na tomto mieste kym sa nevrati response (odpoved)
            // response moze obsahovat data alebo error (ak sa nieco nepodarilo)
            const response = await axios.get('https://www.boredapi.com/api/activity');
            console.log('data', response.data);
    
            // pred ulozenim dat do stavu useState ich overime
            if (response.data.activity) {
                setActivity(response.data.activity);
            }
        },
        []
    );

    useEffect(
        () => {
            getActivityFromServer();
        },
        [getActivityFromServer]
    );

    return (
        <div className="App">
            <h1>I am so bored...</h1>

            <Image
                rounded
                src={activity === 'I am not bored anymore' ? myHappyImage : myBoredImage}
                width="320"
                height="150"
                alt="bored kitty"
            />

            <h2>What can I do?</h2>

            <Alert
                className="activity"
                variant={activity === 'I am not bored anymore' ? 'success' : 'primary'}
            >
                {activity}
            </Alert>
            
            <div className="bored-buttons">
                <Button
                    variant="outline-primary"
                    onClick={getActivityFromServer}
                >
                    Next activity
                </Button>
                {' ' /* toto je len male klamstvo aby som dostal mini medzeru medzi buttony :-) */}
                <Button 
                    variant="outline-success"
                    onClick={() => { setActivity('I am not bored anymore') }}
                >
                    I'm not bored anymore
                </Button>
            </div>
        </div>
    );
}

export default App;