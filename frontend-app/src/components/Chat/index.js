import classNames from 'classnames/bind';
import { useContext, useRef, useEffect } from 'react';
import style from './Chat.module.scss';
import InputChat from './InputChat';
import Context from './Context';

const cx = classNames.bind(style);

function Chat() {
    const states = useContext(Context);
    const { messages, setMessages } = states[1];

    const ulRef = useRef();

    useEffect(() => {
        ulRef.current.scrollTo(0, ulRef.current.scrollHeight);
    }, [messages]);

    return (
        <div className={cx('container')}>
            <div className={cx('viewchat')}>
                <ul ref={ulRef} className={cx('content')}>
                    {messages.map((message, index) => {
                        return (
                            <li key={index} className={cx('chat', message.css)}>
                                <p>{message.content}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <InputChat />
        </div>
    );
}

export { default as ChatProvider } from './Provider';
export default Chat;
