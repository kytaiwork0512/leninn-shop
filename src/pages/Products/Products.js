import classNames from 'classnames/bind';

import styles from './Products.module.scss';
import Navbar from '~/components/Navbar';
import Helmet from '~/components/Helmet';

const cx = classNames.bind(styles);

function Products() {
    return (
        <Helmet title="Product">
            <div className={cx('wrapper')}>
                <Navbar />
                <h2>Products Page</h2>
                <h2>Products Page1</h2>
                <h2>Products Page2</h2>
                <h2>Products Page5</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page</h2>
                <h2>Products Page1111</h2>
                <h2>Products Page34534</h2>
                <h2>Products Page345</h2>
                <h2>Products Page555</h2>
            </div>
        </Helmet>
    );
}

export default Products;
