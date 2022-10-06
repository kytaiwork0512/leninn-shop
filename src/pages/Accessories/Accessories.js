import classNames from 'classnames/bind';

import styles from './Accessories.module.scss';
import Navbar from '~/components/Navbar';

const cx = classNames.bind(styles);

function Accessories() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <h2>Accessories Page</h2>
        </div>
    );
}

export default Accessories;
