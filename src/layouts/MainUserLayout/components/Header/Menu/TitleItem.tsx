import { NavLink } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Titles.module.scss';

const cx = classNames.bind(styles)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TitleItem: React.FC<any> = ({ title, to }) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <div className={cx('title')}>
                {title}
                <div className={cx('hover-bottom')}></div>
            </div>
        </NavLink>
    )
}

export default TitleItem;
