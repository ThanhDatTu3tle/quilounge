import classNames from "classnames/bind";

import styles from "./Parallax.module.scss";

interface Props {
  url?: React.ReactNode;
  content?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function Parallax({ url, content }: Props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")} style={{ backgroundImage:`url(${url})` }}></div>
      <div className={cx("content")}>
        {content}
      </div>
    </div>
  );
}
