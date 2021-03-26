import React, { useState } from 'react';

const App = () => {

    const [ activity, setActivity ] = useState('Share positive feedback about your great React teachers. 🙌')

    return (
        <div>
            <h1>I am so bored...</h1>
            <h2>What can I do?</h2>
            <p>{activity}</p>
            <div>
                <button onClick={() => { setActivity('Write a poem') }}>
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