import classNames from 'classnames/bind';
import { useContext, useRef } from 'react';
import styles from './InputChat.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Context from '../Context';

const cx = classNames.bind(styles);

function InputChat() {
    const states = useContext(Context);
    const { typing, setTyping } = states[0];
    const { messages, setMessages } = states[1];
    const inputRef = useRef();

    async function translate() {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${typing}&langpair=en|vi`);
        const responseDatas = await response.json();
        setMessages((prev) => {
            return [
                ...prev,
                {
                    content: responseDatas.responseData.translatedText,
                    css: 'chatcoming',
                },
            ];
        });
    }

    const handleSubmit = () => {
        setMessages((prev) => {
            return [
                ...prev,
                {
                    content: typing,
                    css: 'chatsending',
                },
            ];
        });
        setTyping('');
        inputRef.current.focus();
        translate();
    };

    return (
        <div className={cx('container')}>
            <div className={cx('send')}>
                <input
                    ref={inputRef}
                    value={typing}
                    onChange={(e) => setTyping(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && typing) handleSubmit();
                    }}
                    placeholder="Nhập nội dung cần dịch"
                />
                <button className={cx('send-btn')} onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
}

export default InputChat;
