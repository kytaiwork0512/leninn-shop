import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('gird-container')}>
                    <div className={cx('grid-item')}>
                        <div className={cx('privacy-policy')}>
                            <FontAwesomeIcon icon={faAngleRight} className={cx('policy-btn')} />
                            <a href="/privacy-policy">Chính sách bảo mật</a>
                        </div>
                        <div className={cx('return-policy')}>
                            <FontAwesomeIcon icon={faAngleRight} className={cx('policy-btn')} />
                            <a href="/return-policy">Chính sách đổi trả</a>
                        </div>
                    </div>
                    <div className={cx('grid-item')}>
                        <div className={cx('address')}>
                            <span>Địa chỉ 1: </span>10 Nguyễn Hy Quang, Đống Đa, Hà Nội
                        </div>
                        <div className={cx('address')}>
                            <span>Địa chỉ 2: </span>40A Ấu Triệu, Hoàn Kiếm, Hà Nội
                        </div>
                        <div className={cx('hotline')}>
                            <span>Hotline: </span>090 222 6803
                        </div>
                    </div>
                    <div className={cx('grid-item')}>
                        <div className={cx('follow')}>Theo dõi chúng tôi trên mạng xã hội</div>
                        <div className={cx('media')}>
                            <Link target="_blank" to={'//facebook.com/leninnskateshop/'}>
                                <img className={cx('facebook')} src={images.facebook.default} alt="fb-icon" />
                            </Link>
                            <Link target="_blank" to={'//instagram.com/leninn.skateshop/'}>
                                <img className={cx('instagram')} src={images.instagram.default} alt="insta-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <div className={cx('text')}>© 2021 Lennin. Đã đăng ký Bản quyền.</div>
            </div>
        </div>
    );
}

export default Footer;
