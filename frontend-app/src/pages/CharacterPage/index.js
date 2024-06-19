import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from './CharacterPage.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

function CharacterPage() {
    return (
        <>
            <div className={cx('header')}>Choose the character you want to start</div>
            <Box sx={{ width: '97%', padding: '20px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {characters.map((value, index) => {
                        return (
                            <Grid key={index} item xs={2}>
                                <Link to={'/character/' + value} style={{ textDecoration: 'none', color: 'black' }}>
                                    <div className={cx('grid-item')}>{value}</div>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default CharacterPage;
