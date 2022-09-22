// import PropTypes from 'prop-types';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('items')} href={data.to}>
                <h5>{data.title}</h5>
            </a>
            {data.icon}
        </div>
    );
}

export default MenuItem;
