import classNames from 'classnames/bind';

import styles from './Deck.module.scss';
import Navbar from '~/components/Navbar';

const cx = classNames.bind(styles);

function Deck() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <h2>Deck Page</h2>
        </div>
    );
}

export default Deck;
