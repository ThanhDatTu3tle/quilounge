import classNames from "classnames/bind";

import styles from "./MainUserLayout.module.scss";

import Header from "../MainUserLayout/components/Header";
import Footer from "../MainUserLayout/components/Footer";

interface Props {
  children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function MainUserLayout({ children }: Props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div style={{ overflowX: 'hidden' }}>{children}</div>
      <Footer />
    </div>
  );
}
