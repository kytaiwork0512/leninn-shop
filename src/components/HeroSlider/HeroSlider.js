import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './HeroSlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const HeroSlider = (props) => {
    const data = props.data;

    const timeOut = props.timeOut ? props.timeOut : 3000;

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(() => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
        setActiveSlide(index);
    }, [activeSlide, data]);

    const prevSlide = () => {
        const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
        setActiveSlide(index);
        debugger;
    };

    useEffect(() => {
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextSlide();
            }, timeOut);
            return () => {
                clearInterval(slideAuto);
            };
        }
    }, [nextSlide, timeOut, props]);

    return (
        <div className={cx('hero-slider')}>
            {data.map((item, index) => (
                <HeroSliderItem key={index} item={item} active={index === activeSlide} />
            ))}
            {props.control ? (
                <div className={cx('hero-slider__control')}>
                    <div className={cx('hero-slider__control__item')} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faAngleLeft} className={cx('prev-btn')} />
                    </div>
                    <div className={cx('hero-slider__control__item')}>
                        <div className={cx('index')}>
                            {activeSlide + 1} / {data.length}
                        </div>
                    </div>
                    <div className={cx('hero-slider__control__item')} onClick={nextSlide}>
                        <FontAwesomeIcon icon={faAngleRight} className={cx('next-btn')} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

const HeroSliderItem = (props) => (
    <div className={cx(styles['hero-slider__item'], props.active ? styles.active : '')}>
        <div className={cx(styles['hero-slider__item__img'])}>
            <div className={cx(styles['hero-slider__item__link'])}>
                <Link to={props.item.path}>
                    <img src={props.item.img} alt="banner.jpg" />
                </Link>
            </div>
        </div>
    </div>
);

export default HeroSlider;
