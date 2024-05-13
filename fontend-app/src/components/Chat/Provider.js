import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [typing, setTyping] = useState('');
    const [messages, setMessages] = useState([]);
    return (
        <Context.Provider
            value={[
                { typing, setTyping },
                { messages, setMessages },
            ]}
        >
            {children}
        </Context.Provider>
    );
}

export default Provider;
