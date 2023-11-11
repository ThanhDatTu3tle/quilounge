import classNames from 'classnames/bind';
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

import styles from './ParallaxStatic.module.scss';

interface Props {
  children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function ParallaxStatic({ children }: Props) {
  return (
    <div
      className={cx('static')}
      style={{
        backgroundImage: `url(http://quilounge.com/assets/uploads/2016/04/file-texture-qui-con-rua2.jpg)`,
      }}
    >
      <>
        <div className={cx('content')}>{children}</div>
      </>
    </div>
  );
}
