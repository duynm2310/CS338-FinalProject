import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/logouit.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={logo} height={'100%'} />
                <div className={cx('tittle')}>UIT</div>
            </div>
            <div className={cx('content')}>Ứng dụng chuyển đổi hình ảnh thành văn bản</div>
        </header>
    );
}

export default Header;
