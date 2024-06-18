import classNames from 'classnames/bind';
import styles from './Game.module.scss';

const cx = classNames.bind(styles);

function Game({ game, complete }) {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <img src={game.img} height={'400px'} />
            </div>
            {complete ? (
                <div className={cx('keyword--complete')}>
                    {game.keyword.split('').map((value, index) => (
                        <div key={index}>{value}</div>
                    ))}
                </div>
            ) : (
                <div className={cx('keyword')}>
                    {game.keyword.split('').map((value, index) => {
                        if (index !== game.key) {
                            return <div key={index}>{value}</div>;
                        } else {
                            return (
                                <div key={index} className="fill">
                                    {}
                                </div>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
}

export default Game;
