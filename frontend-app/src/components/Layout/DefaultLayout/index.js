import classNames from 'classnames/bind';
import Header from './Header';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}> {children}</div>
            </div>
        </>
    );
}

export default DefaultLayout;
