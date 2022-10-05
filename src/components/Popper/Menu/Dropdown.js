import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Dropdown({ data, onMouseOver }) {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('items')} href={data.to} onMouseOver={onMouseOver}>
                <h5>{data.title}</h5>
            </a>
        </div>
    );
}

export default Dropdown;
