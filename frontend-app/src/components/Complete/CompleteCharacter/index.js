import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './CompleteCharacter.module.scss';
import audio from '../complete.mp3';

const cx = classNames.bind(styles);

function CompleteCharacter() {
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
                <Link to={'/character'}>
                    <button className={cx('button__return')}>Return to Letter List</button>
                </Link>
            </div>
        </div>
    );
}

export default CompleteCharacter;
