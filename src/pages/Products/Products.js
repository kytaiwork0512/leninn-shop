import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import Navbar from '~/components/Navbar';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            <h2>Products Page</h2>
        </div>
    );
}

export default Products;
