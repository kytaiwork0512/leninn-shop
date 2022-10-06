/* eslint-disable array-callback-return */
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faAngleDown,
    faAngleRight,
    faCartShopping,
    faCircleUser,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// const mainNav = [
//     {
//         display: 'SẢN PHẨM',
//         path: '/',
//     },
//     {
//         display: 'SALE',
//         path: '/',
//     },
//     {
//         display: 'THƯ VIỆN',
//         path: '/',
//     },
//     {
//         display: 'GIỚI THIỆU',
//         path: '/',
//     },
// ];

const MENU_ITEMS = [
    {
        title: 'ACCESSORIES',
        to: 'products/accessories',
    },
    {
        title: 'CLOTHING',
        icon: <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>,
        children: {
            data: [
                {
                    title: 'TOP',
                },
                {
                    title: 'OUTERWEAR',
                },
                {
                    title: 'BOTTOMS',
                },
            ],
        },
    },
    {
        title: 'DECK',
        to: 'products/deck',
    },
    {
        title: 'S/S2022',
    },
    {
        title: 'F/W2021',
    },
    {
        title: 'S/S2021',
    },
    {
        title: 'F/W2020',
    },
];

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={'/'}>
                    <img className={cx('logo')} src={images.logo} alt="logo-leninn" />
                </Link>

                <div className={cx('header-menu')}>
                    <div className={cx('menu')}>
                        <Menu items={MENU_ITEMS}>
                            <div className={cx('menu-item')}>
                                <a href="/products">SẢN PHẨM</a>
                            </div>
                        </Menu>
                        <div className={cx('menu-item-2')}>
                            <a href="/sale">SALE</a>
                            <a href="/gallery">THƯ VIỆN</a>
                            <a href="/about">GIỚI THIỆU</a>
                        </div>
                    </div>
                </div>

                <div className={cx('header-actions')}>
                    <div className={cx('actions')}>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={cx('user-btn')}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </button>
                        <Link to={'/cart'}>
                            <button className={cx('bag-btn')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </Link>
                    </div>
                    <div className={cx('language')}>
                        {/* Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context. */}
                        <div>
                            <Tippy
                                interactive
                                placement="bottom-end"
                                render={(attrs) => (
                                    <div className={cx('change-language')} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            <h4 className={cx('english')}>TIẾNG ANH</h4>
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <h4 className={cx('lang-text')}>VNI</h4>
                            </Tippy>
                        </div>
                        <button className={cx('lang-btn')}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
