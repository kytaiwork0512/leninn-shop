import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { set } from '~/redux/product-modal/productModalSlice';
import numberWithCommas from '~/utils/numberWithCommas';
// import Button from '../Button';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

const ProductCard = (props) => {
    // const dispatch = useDispatch();

    return (
        <div className={cx('product-card')}>
            <Link to={`/catalog/${props.slug}`}>
                <div className={cx('product-card__image')}>
                    <img src={props.img01} alt="" />
                </div>
                <h3 className={cx('product-card__name')}>{props.name}</h3>
                <div className={cx('product-card__price')}>
                    {numberWithCommas(props.price)}
                    <span className={cx('product-card__price__old')}>
                        <del>{numberWithCommas(399000)}</del>
                    </span>
                </div>
            </Link>
            <div className={cx('product-card__btn')}>
                {/* <Button size="sm" icon="bx bx-cart" animate={true} onClick={() => dispatch(set(props.slug))}>
                    chọn mua
                </Button> */}
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard;
