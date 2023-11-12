import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import '../../assets/biondisansrg-regular.otf';

import Parallax from '../../components/Parallax';
import ParallaxStatic from '../../components/ParallaxStatic';
import Image from '../../components/Image';

const cx = classNames.bind(styles);

export default function Home() {

  return (
    <>
      <div className={cx('parallax-main')}>
        <div className={cx('image')} style={{ backgroundImage:"url(https://quilounge.com/hochiminh/assets/uploads/2016/07/2b7a2602-copy-2048x1365.jpg)" }}></div>
        <img className={cx('logo')} src="https://quilounge.com/assets/uploads/2016/11/logo-01-copy-min-e1479186963103.png" />
        <svg className={cx('svg')}>
          <path fill='#fff' d='M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z'></path>
        </svg>
        <div className={cx('down-arrow')}>
          <div className={cx('arrow')}></div>
        </div>
      </div>
      <ParallaxStatic>
        <div className={cx('about-us')}>
          <div className={cx('top')}>
            <div className={cx('description')}>
              <p className={cx('title')}>ABOUT US</p>
              <p className={cx('content')}>
                QUI – CUISINE MIXOLOGY IS A CONCEPT OF DINING LOUNGE; 
                LOCATED RIGHT AT THE CROWDED LE THANH TON STREET OF DISTRICT 1. 
                CONCEPTUALISED BY THE WORLD-RENOWNED LW DESIGN GROUP, 
                QUI’S DESIGN IS SLEEK AND LUXURIOUS IN A WARM TONE OF WOOD FURNISHINGS THAT IS NOT ONLY CONTEMPORARY BUT ALSO ELEGANT.
              </p>
              <div className={cx('iframe-youtube')}>
                <iframe src="https://www.youtube.com/embed/d7H-tSyRd30?wmode=transparenartt" />
              </div>      
              <div className={cx('qui-icon')}>
                <img src="https://quilounge.com/assets/uploads/2016/03/qui-icon.png" style={{ width: '25px', height: 'auto' }}/>
              </div>     
            </div>
            <div className={cx("images")}>
              <Image
                src={"https://quilounge.com/hochiminh/assets/uploads/2016/11/homepage_3-min-min.jpg"}
              />
              <Image
                src={"https://quilounge.com/hochiminh/assets/uploads/2016/03/wagyu-tomahawk-with-condiments-683x1024.jpg"}
              />
            </div>
          </div>
          <div className={cx('bottom')}>
            <Image
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/05/43737395_2128159974112756_1418629329956372480_n-208x300.png"}
            />
            <Image
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/05/43639013_172105297034646_5077346072011997184_n-300x225.png"}
            />
            <Image
              src={"https://quilounge.com/hochiminh/assets/uploads/2019/02/rb-award-vietcetera-300x205.png"}
            />
          </div>
        </div>
      </ParallaxStatic>
      <Parallax url={"https://quilounge.com/hochiminh/assets/uploads/2014/06/homepage-atmosphere.jpg"} content={"ATMOSPHERE"}/>
      <ParallaxStatic>
        <div className={cx('atmosphere')}>
          <div className={cx('left')}>
            <Image
              style={{ width: '48%', height: '48%' }}
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/06/homepage_5-min-300x222.jpg"}
            />
            <Image
              style={{ width: '48%', height: '48%' }}
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/06/homepage_6-min-300x222.jpg"}
            />
            <Image
              style={{ width: '48%', height: '48%' }}
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/06/homepage_7-min-300x222.jpg"}
            />
            <Image
              style={{ width: '48%', height: '48%' }}
              src={"https://quilounge.com/hochiminh/assets/uploads/2014/06/homepage_8-min-300x222.jpg"}
            />
          </div>
          <div className={cx('right')}>
            <p className={cx('title')}>EXPLORING OUR VENUE</p>
            <p className={cx('content')}>
              A FUSION FUNK APPROACH TO THIS DINING LOUNGE CONCEPT EMBRACING PUNCHY COLOR ACCENTS WITH BOLD GRAPHIC VISUAL FEATURES; 
              THE MERGING OF EAST & WEST DESIGN ELEMENTS SEAMLESSLY. 
              COMPRISING OF 3 KEY SPACES: THE ARRIVAL TERRACE, BOOTH LOUNGING & THE VIP LIBRARY ROOM. 
              THE FOCAL CENTRAL BAR IS THE HEART OF QUI WITH OVERSIZED CONTEMPORARY ASIAN STREET ART ADORNING THE WALLS OFFSET BY MORE TRADITIONAL 
              YET QUIRKY FURNITURE DETAILS. FOR THOSE WHO WANT TO CELEBRATE THEIR EVENT IN PRIVATE, 
              QUI OFFERS YOU A VIP AREA WITH A GREAT FOOD SHOWCASE COUNTER.
            </p>
            <p className={cx('gallery')}>
              VIEW FULL GALLERY
            </p>
            <img src="https://quilounge.com/assets/uploads/2016/03/qui-icon.png" style={{ width: '25px', height: 'auto' }}/>
          </div>
        </div>
      </ParallaxStatic>
      <Parallax url={"https://quilounge.com/hochiminh/assets/uploads/2014/05/homepage-cuisine-mixology.jpg"} content={"CUISINE & MIXOLOGY"}/>
      <ParallaxStatic>
        <div className={cx('cuisine-mixology')}>
            <div className={cx('top')}>
                <div className={cx('left')}>
                    <p className={cx('title')}>DISCOVER OUR MENU</p>
                    <p className={cx('content')}>
                      PARING . SHARING . TEMPTING
                    </p>
                    <p className={cx('content')}>
                      THE MENU FOCUSES MAINLY ON SMALL PLATES IN A SHARING STYLE WITH ASIAN FUSION CUISINE, 
                      WHICH IS PERFECT FOR A QUICK BITE BEFORE A NIGHT OUT OR A FULL MEAL SHARED WITH PEERS.
                    </p>
                    <p className={cx('food-menu')}>
                      VIEW FULL FOOD MENU
                    </p>
                    <img src="https://quilounge.com/assets/uploads/2016/03/qui-icon.png" style={{ width: '25px', height: 'auto' }}/>
                </div>
                <div className={cx('right')}>
                    <Image
                      src={"https://quilounge.com/hochiminh/assets/uploads/2016/11/homepage_10-1-min2-3-min.jpg"}
                    />
                    <Image
                      src={"https://quilounge.com/hochiminh/assets/uploads/2016/11/homepage_11-min-min.jpg"}
                    />
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('left')}>
                    <Image
                      src={"https://quilounge.com/hochiminh/assets/uploads/2016/11/homepage_12-min1-min.jpg"}
                    />
                    <Image
                      src={"https://quilounge.com/hochiminh/assets/uploads/2016/11/homepage_10-min-min.jpg"}
                    />
                </div>
                <div className={cx('right')}>
                    <p className={cx('title')}>A SIP OF OUR DRINK</p>
                    <p className={cx('content')}>
                      ALONGSIDE WITH THE INNOVATIVE FOOD, QUI ALSO OFFERS AN EXTENSIVE SELECTION OF CREATIVE COCKTAILS, 
                      PREMIUM WINE, SAKE. COME FOR A DRINK AT QUI, YOU WILL BECOME A TRAVELER IN A JOURNEY TO EXPLORE THE DISTINCTIVE DRINKS FOR YOURSELF.
                    </p>
                    <p className={cx('drink-menu')}>
                      VIEW FULL DRINK MENU
                    </p>
                    <img src="https://quilounge.com/assets/uploads/2016/03/qui-icon.png" style={{ width: '25px', height: 'auto' }}/>
                </div>
            </div>
        </div>
      </ParallaxStatic>
    </>
  );
}
