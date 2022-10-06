import classNames from 'classnames/bind';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('menu')}>
                    <div className={cx('menu-item')}>
                        <div className={cx('wrap-item')}>
                            <a href="/products">TẤT CẢ</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products/accessories">ACCESSORIES</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products/clothing">CLOTHING</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products/deck">DECK</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products">S/S 2022</a>
                        </div>

                        <div className={cx('wrap-item')}>
                            <a href="/products">F/W 2021</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products">S/S 2021</a>
                        </div>
                        <div className={cx('wrap-item')}>
                            <a href="/products">F/W 2020</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
