import classNames from 'classnames/bind';
import styles from '~/App.module.scss';
import Header from '~/components/Header';
import Chat, { ChatProvider } from '~/components/Chat';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('chat')}>
                    <ChatProvider>
                        <Chat />
                    </ChatProvider>
                </div>
                <div className={cx('image')}>Image</div>
            </div>
        </div>
    );
}

export default App;
