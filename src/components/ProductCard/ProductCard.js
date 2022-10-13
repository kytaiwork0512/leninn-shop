import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import numberWithCommas from '~/utils/numberWithCommas';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

const ProductCard = (props) => {
    return (
        <div className={cx('product-card')}>
            <Link to={`/catalog/${props.slug}`}>
                <div className={cx('container')}>
                    <div className={cx('product-card__image')}>
                        <img src={props.img} alt="" />
                        <div className={cx('product-card__overlay')}></div>
                        <div className={cx('product-card__info')}>
                            <div>
                                <h2 className={cx('product-card__name')}>{props.name}</h2>
                                <div className={cx('product-card__price')}>
                                    {numberWithCommas(props.price + ' ₫')}
                                    {/* <span className={cx('product-card__price__old')}>
                                    <del>{numberWithCommas(399000)}</del>
                                </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    categorySlug: PropTypes.string.isRequired,
};

export default ProductCard;
