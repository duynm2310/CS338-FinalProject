import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CompleteGame.module.scss';
import audio from '../complete.mp3';

const cx = classNames.bind(styles);

function CompleteGame({ onClick }) {
    return (
        <div className={cx('container')}>
            <audio src={audio} autoPlay />
            <div className={cx('content')}>
                Congratulations
                <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: '#63E6BE', fontSize: '64px', marginTop: '30px' }}
                />
            </div>
            <div className={cx('return')}>
                <button className={cx('button__return')} onClick={onClick}>
                    Next!!!
                </button>
            </div>
        </div>
    );
}

export default CompleteGame;
