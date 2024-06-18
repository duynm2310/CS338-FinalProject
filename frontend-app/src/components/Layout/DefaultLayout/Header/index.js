import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/logouit.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={logo} height={'50px'} />
                <div className={cx('tittle')}>UIT</div>
            </div>
            <nav className={cx('navbar')}>
                <ul>
                    <li>
                        <Link className={cx('nav-item')} to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
