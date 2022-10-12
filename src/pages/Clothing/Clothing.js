import classNames from 'classnames/bind';

import styles from './Clothing.module.scss';

const cx = classNames.bind(styles);

function Clothing() {
    return (
        <div className={cx('wrapper')}>
            <h2>Clothing Page</h2>
        </div>
    );
}

export default Clothing;
