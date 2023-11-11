import config from "../../../../config";
import classNames from "classnames/bind";

import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from './Menu';

const cx = classNames.bind(styles)

const MenuTitles: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Titles>
                <TitleItem title='HOME' to={config.routes.home} />
                <TitleItem title='ABOUT' to={config.routes.about} />
                <TitleItem title='GALLERY' to={config.routes.gallery} />
                <TitleItem title='CAREER' to={config.routes.career} />
                <TitleItem title='RESERVATIONS' to={config.routes.reservations} />
                <TitleItem title='CONTACT' to={config.routes.contact} />
                <TitleItem title='MENU' to={config.routes.menu} />
                <TitleItem title='EVENTS' to={config.routes.events} />
            </Titles>
        </div>
    )
}

export default MenuTitles;
