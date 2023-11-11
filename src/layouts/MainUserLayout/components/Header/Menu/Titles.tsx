import classNames from "classnames/bind";

import styles from './Titles.module.scss';

const cx = classNames.bind(styles)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Titles: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}> 
            {children}
        </div>
    )
}

export default Titles;
