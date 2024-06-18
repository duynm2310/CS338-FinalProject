import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from '~/components/Game';
import Camera from '~/components/Camera';
import styles from './GamePage.module.scss';
import CompleteGame from '~/components/Complete/CompleteGame';
import levels from '~/datas/levels';
const cx = classNames.bind(styles);

function GamePage() {
    // const shuffle = useCallback((array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }, []);

    const [numberLevel, setNumberLevel] = useState(0);
    const [level] = useState(levels);
    const [complete, setComplete] = useState(false);
    const navigate = useNavigate();

    const handleOnclick = useCallback(() => {
        if (numberLevel + 1 >= level.length) {
            navigate('/');
        }
        setNumberLevel((prev) => prev + 1);
        setComplete(false);
    }, [numberLevel]);

    const handleGetSignal = useCallback(
        (keyword) => {
            const keywordLevel = level[numberLevel].keyword[level[numberLevel].key];
            if (keyword === keywordLevel) {
                setComplete(true);
            }
        },
        [numberLevel],
    );

    return (
        <div className={cx('container')}>
            <div className={cx('game')}>
                <Game game={level[numberLevel]} complete={complete} />
            </div>
            {complete ? (
                <div className={cx('complete')}>
                    <CompleteGame onClick={handleOnclick} />
                </div>
            ) : (
                <div className={cx('camera')}>
                    <Camera onGetSignal={handleGetSignal} />
                </div>
            )}
        </div>
    );
}

export default GamePage;
