import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const Section = (props) => {
    return <div className={cx('section')}>{props.children}</div>;
};

export const SectionTitle = (props) => {
    return <div className={cx('section__title')}>{props.children}</div>;
};

export const SectionBody = (props) => {
    return <div className={cx('section__body')}>{props.children}</div>;
};

export const SectionFooter = (props) => {
    return <div className={cx('section__footer')}>{props.children}</div>;
};

export default Section;
