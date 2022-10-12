import classNames from 'classnames/bind';

import styles from './Deck.module.scss';

const cx = classNames.bind(styles);

function Deck() {
    return (
        <div className={cx('wrapper')}>
            <h2>Deck Page</h2>
        </div>
    );
}

export default Deck;
