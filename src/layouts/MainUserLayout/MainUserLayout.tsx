import React from "react";
import classNames from "classnames/bind";

import styles from "./MainUserLayout.module.scss";

import Header from "../MainUserLayout/components/Header";
import Footer from "../MainUserLayout/components/Footer";

interface Props {
  children?: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function MainUserLayout({ children }: Props) {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 900; 

      if (scrollTop > threshold) {
        console.log("OK");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('page')}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
