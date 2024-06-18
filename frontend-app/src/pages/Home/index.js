import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import LogoApp from '~/logoapp.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <div className={cx('logoapp')}>
                <img src={LogoApp} height="300px" />
            </div>
            <div className={cx('content')}>
                <h1 className={cx('tittle')}>American Sign Language</h1>
                <div className={cx('content-button')}>
                    <Link to="/game">
                        <button className={cx('button')}>Training via games</button>
                    </Link>
                    <Link to="/character">
                        <button className={cx('button')}>Training on individual letters</button>
                    </Link>
                    <Link to="/information">
                        <button className={cx('button')}>App information</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
