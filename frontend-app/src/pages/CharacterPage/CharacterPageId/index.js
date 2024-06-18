import { useState, useRef, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import datas from '~/datas/characters';
import styles from './CharacterPageId.module.scss';
import Camera from '~/components/Camera';
import CompleteCharacter from '~/components/Complete/CompleteCharacter';

const cx = classNames.bind(styles);

function CharacterPageId() {
    const data = useRef(datas[useParams().id]);

    const [complete, setComplete] = useState(false);

    const handleGetSignal = useCallback((keyword) => {
        if (keyword === data.current.chr) {
            setComplete(true);
        }
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <img
                    src={data.current.img}
                    height={'400px'}
                    width={'400px'}
                    style={{ marginTop: '100px' }}
                    alt={'Hinh chữ ' + data.current.chr}
                />
                <div style={{ fontSize: '24px', marginTop: '40px' }}>Please follow the gesture shown in the image</div>
            </div>
            {complete ? (
                <div className={cx('complete')}>
                    <CompleteCharacter />
                </div>
            ) : (
                <div className={cx('camera')}>
                    <Camera onGetSignal={handleGetSignal} />
                </div>
            )}
        </div>
    );
}

export default CharacterPageId;
