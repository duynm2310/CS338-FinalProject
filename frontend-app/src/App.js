import classNames from 'classnames/bind';
import styles from '~/App.module.scss';
import Header from '~/components/Header';
import Chat, { ChatProvider } from '~/components/Chat';
import ImageUpload from '~/components/Chat/ImageUpload';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className="App">
            <Header></Header>
            <div className={cx('container')}>
                <ChatProvider>
                    <div className={cx('chat')}>
                        <Chat />
                    </div>
                    <div className={cx('image')}>
                        <ImageUpload />
                    </div>
                </ChatProvider>
            </div>
        </div>
    );
}

export default App;
