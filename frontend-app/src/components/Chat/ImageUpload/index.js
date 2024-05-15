import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { useRef, useContext } from 'react';
import styles from './ImageUpload.module.scss';
import Context from '../Context';

const cx = classNames.bind(styles);

function ImageUpload() {
    const states = useContext(Context);
    const { messages, setMessages } = states[1];

    const inputRef = useRef();

    const handleDrop = (e) => {
        e.preventDefault();
        handleSubmitImage(e.dataTransfer.files[0]);
    };

    const handleClick = (e) => {
        inputRef.current.click();
    };

    const handleSubmitImage = (file) => {
        setMessages(() => {
            return [
                ...messages,
                {
                    img: URL.createObjectURL(file),
                    css: 'chatsending',
                },
            ];
        });
    };

    return (
        <div className={cx('container')}>
            <input
                ref={inputRef}
                className={cx('input')}
                id="input-btn"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    handleSubmitImage(e.target.files[0]);
                    e.target.value = null;
                }}
            />
            <div
                className={cx('input-label')}
                onDrop={handleDrop}
                onDragOver={(e) => {
                    e.preventDefault();
                }}
            >
                <FontAwesomeIcon style={{ fontSize: '2.5rem' }} icon={faUpload} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <b style={{ fontSize: '1.8rem' }}>Chọn ảnh hoặc kéo thả vào đây</b>
                    <div style={{ color: '#ccc', fontWeight: 400 }}>Chỉ hỗ trợ dạng hình ảnh như .jpeg, .png, .jpg</div>
                </div>
                <div className={cx('input-label-buttom')} onClick={handleClick}>
                    Chọn ảnh
                </div>
            </div>
        </div>
    );
}

export default ImageUpload;
