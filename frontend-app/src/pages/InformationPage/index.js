import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './InformationPage.module.scss';
import logouit from '~/logouit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import stan from '~/datas/imgs/avt/emea_gf_cc_char_stan.png';
import dipper from '~/datas/imgs/avt/emea_gf_cc_char_dipper.png';
import mabel from '~/datas/imgs/avt/emea_gf_cc_char_mabel.png';
import soos from '~/datas/imgs/avt/emea_gf_cc_char_soos.png';
import wendy from '~/datas/imgs/avt/emea_gf_cc_char_wendy.png';
import gideon from '~/datas/imgs/avt/emea_gf_cc_char_gideon.png';

const cx = classnames.bind(styles);

function InformationPage() {
    return (
        <div className={cx('container')}>
            <div className={cx('tittle')}>
                <Link to="/">
                    <div className={cx('back')}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#2fa1da', fontSize: '18px' }} />
                    </div>
                </Link>
                <div className={cx('tittle--main')}>American Sign Language</div>
            </div>
            <div className={cx('intro')}>
                <div className={cx('subtittle')}>Introduction</div>
                <p>
                    Sign Language is a special form of language, a communication system that uses gestures and shapes
                    instead of spoken words. This is not only the main method of communication, but also the culture and
                    identity of the deaf community.
                </p>
                <p>
                    Nowadays, the demand for learning sign language is increasing, understanding sign language has and
                    is bringing benefits to users in many situations.
                </p>
                <p>
                    American Sign Language is an application created to help users access and learn sign language
                    through fun games.
                </p>
            </div>
            <div className={cx('detail')}>
                <div className={cx('subtittle')}>Detailed information about the application</div>
                <p>
                    The application is built to assist users in learning sign language for the 26 letters on the
                    alphabet, the gestures used are based on ASL (American Sign Language).
                </p>
                <p>
                    When users access the application, the application will display 2 training modes for users to choose
                    from, specifically:
                </p>
                <ul>
                    <li>
                        <div className={cx('subsubtittle')}>Mode "Practice through each letter"</div>
                        <p>
                            In this mode, the interface will display the alphabet consisting of 26 letters. Users will
                            choose a letter they want to learn in sign language.
                        </p>
                        <p>
                            After users choose a letter, the application will switch to the interface to learn that
                            letter. The interface includes images of sign language of the letter, and the camera screen.
                        </p>
                        <p>
                            Users hold their hand in front of the camera screen, perform the action of the letter. When
                            the user completes the correct action, the application will display "Congratulations, you
                            have succeeded".
                        </p>
                        <li>
                            <div className={cx('subsubtittle')}>Mode "Practice through games"</div>
                            <p>
                                In this mode, players will have to use sign language to predict the missing letter of a
                                given word based on the image describing that word.
                            </p>
                            <p>
                                The interface will display the word to be filled in, the image describing the word, and
                                the camera screen.
                            </p>
                            <p>
                                Users hold their hand in front of the camera screen, perform the action of the missing
                                letter. When the user completes the correct action, the application will display
                                "Congratulations, you have succeeded".
                            </p>
                        </li>
                    </li>
                </ul>
            </div>
            <div className={cx('aboutus')}>
                <div className={cx('subtittle')}>Information about the implementer</div>
                <div className={cx('teacher')}>
                    <div className={cx('menber')}>
                        <img src={stan} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>MSc. Do Van Tien</div>
                            <div className={cx('mssv')}>Supervising lecturer</div>
                        </div>
                    </div>
                </div>
                <div className={cx('team')}>
                    <div className={cx('menber')}>
                        <img src={dipper} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>Nguyen Minh Duy</div>
                            <div className={cx('mssv')}>21520208</div>
                        </div>
                    </div>
                    <div className={cx('menber')}>
                        <img src={mabel} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>Le Chau Giang</div>
                            <div className={cx('mssv')}>21520213</div>
                        </div>
                    </div>
                    <div className={cx('menber')}>
                        <img src={soos} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>Dao Duy Thinh</div>
                            <div className={cx('mssv')}>21520463</div>
                        </div>
                    </div>
                    <div className={cx('menber')}>
                        <img src={wendy} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>Nguyen Tran Hoai Bao</div>
                            <div className={cx('mssv')}>21520618</div>
                        </div>
                    </div>
                    <div className={cx('menber')}>
                        <img src={gideon} width={180} />
                        <div className={cx('content')}>
                            <div className={cx('name')}>Nguyen Ngoc Thuc</div>
                            <div className={cx('mssv')}>21521506</div>
                        </div>
                    </div>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('school')}>
                    <img src={logouit} width={120} />
                    <div className={cx('content__school')}>
                        <div>University of Information Technology - VNU-HCM</div>
                        <div>Computer Science Faculty</div>
                        <div>CS338 - Recognition Department</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationPage;
