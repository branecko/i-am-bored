import React, { useState } from 'react';

const App = () => {

    const [ activity, setActivity ] = useState('Share positive feedback about your great React teachers. 🙌')

    return (
        <div>
            <h1>I am so bored...</h1>
            <h2>What can I do?</h2>
            <p>{activity}</p>
            <div>
                <button onClick={() => { /* todo - update value of activity to some different */ }}>
                    Next activity
                </button>
                <button onClick={() => { /* todo - display message 'I am not bored anymore' instead of activity */ }}>
                    I'm not bored anymore
                </button>
            </div>
        </div>
    );
}

export default App;