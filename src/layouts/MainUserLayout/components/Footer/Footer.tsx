import classNames from 'classnames/bind';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import Button from '../../../../components/Button';

// import tripadvisor from '../../../../assets/tripadvisor-64.jpg';

const cx = classNames.bind(styles);

export default function Footer() {

  return (
    <>
        <div className={cx('wrapper-content')}>
            <div className={cx('content')}>
                <div className={cx('follow')}>
                    <div className={cx('title')}>
                        FOLLOW US ON
                    </div>
                    <div className={cx('logos')}>
                        <div className={cx('social-media')}>
                            <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff", width: '0.8rem' }} />  
                            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", width: '1.2rem' }} />
                        </div>
                        <div className={cx('tripadvisor')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" viewBox="0,0,256,256">
                            <g fill="#121212" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,11c-5.83203,0 -11.15625,1.51172 -15.21094,4h-7.78906c0,0 1.75391,2.15234 2.57813,4.57813c-1.60937,2.04297 -2.57812,4.61719 -2.57812,7.42188c0,6.62891 5.37109,12 12,12c3.49609,0 6.63672,-1.50781 8.82813,-3.89453l2.17188,2.89453l2.17188,-2.89453c2.19141,2.38672 5.33203,3.89453 8.82813,3.89453c6.62891,0 12,-5.37109 12,-12c0,-2.80469 -0.96875,-5.37891 -2.57812,-7.42187c0.82422,-2.42578 2.57813,-4.57812 2.57813,-4.57812h-7.79687c-4.05469,-2.48828 -9.375,-4 -15.20312,-4zM25,13c3.88281,0 7.58594,0.70703 10.80078,2.01172c-4.83594,0.07813 -8.97656,3.01563 -10.80078,7.20313c-1.82812,-4.19531 -5.97656,-7.13672 -10.82812,-7.20312l0.07031,-0.02344c3.21094,-1.28906 6.90234,-1.98828 10.75781,-1.98828zM14,17c5.52344,0 10,4.47656 10,10c0,5.52344 -4.47656,10 -10,10c-5.52344,0 -10,-4.47656 -10,-10c0,-5.52344 4.47656,-10 10,-10zM36,17c5.52344,0 10,4.47656 10,10c0,5.52344 -4.47656,10 -10,10c-5.52344,0 -10,-4.47656 -10,-10c0,-5.52344 4.47656,-10 10,-10zM14,21c-3.3125,0 -6,2.6875 -6,6c0,3.3125 2.6875,6 6,6c3.3125,0 6,-2.6875 6,-6c0,-3.3125 -2.6875,-6 -6,-6zM36,21c-3.3125,0 -6,2.6875 -6,6c0,3.3125 2.6875,6 6,6c3.3125,0 6,-2.6875 6,-6c0,-3.3125 -2.6875,-6 -6,-6zM14,23c2.21094,0 4,1.78906 4,4c0,2.21094 -1.78906,4 -4,4c-2.21094,0 -4,-1.78906 -4,-4c0,-2.21094 1.78906,-4 4,-4zM36,23c2.21094,0 4,1.78906 4,4c0,2.21094 -1.78906,4 -4,4c-2.21094,0 -4,-1.78906 -4,-4c0,-2.21094 1.78906,-4 4,-4zM14,25c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2c0,-1.10547 -0.89453,-2 -2,-2zM36,25c-1.10547,0 -2,0.89453 -2,2c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2c0,-1.10547 -0.89453,-2 -2,-2z"></path></g></g>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className={cx('subscribe-title')}>
                    SUBSCRIBE TO OUR NEWSLETTER 
                </div>
                <div className={cx('email')}>
                    <input className={cx('email-input')} placeholder='YOUR EMAIL ADDRESS'/>
                    <Button small primary>SUBMIT</Button>
                </div>
                <div className={cx('vise')}>
                    <div className={cx('title')}>
                        MANAGED BY VISE
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('bottom')}>
            <svg className={cx('svg')}>
                <path fill='#262526' d='M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z'></path>
            </svg>
            <div className={cx('down-arrow')}>
                <div className={cx('arrow')}></div>
                <div className={cx('arrow')}></div>
            </div>
            <p>QUI - Cuisine · Mixology - All Rights Reserved</p>
        </div>
    </>
  );
}
