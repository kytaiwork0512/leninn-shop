import Helmet from '~/components/Helmet';
import Grid from '~/components/Grid';
import classNames from 'classnames/bind';
import styles from './Gallery.module.scss';
import galleryData from '~/assets/fakedata/gallery';

const cx = classNames.bind(styles);

function Gallery() {
    return (
        <Helmet title="Gallery">
            <Grid col={2} mdCol={2} smCol={1}>
                <div className={cx('parent-img-ga')}>
                    <img src={galleryData.gallery1} alt="" />
                </div>
                <div className={cx('parent-img-ga')}>
                    <img src={galleryData.gallery2} alt="" />
                </div>
                <div className={cx('parent-img-ga')}>
                    <img src={galleryData.gallery3} alt="" />
                </div>
                <div className={cx('parent-img-ga')}>
                    <img src={galleryData.gallery4} alt="" />
                </div>
                <div className={cx('parent-img-ga')}>
                    <img src={galleryData.gallery5} alt="" />
                </div>
            </Grid>
        </Helmet>
    );
}

export default Gallery;
