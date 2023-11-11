import { forwardRef } from 'react';

import styles from './Image.module.scss';
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Image: React.FC<any> = forwardRef(({ 
    src, 
    alt, 
    href, 
    className, 
    to, 
    loading,
    ...props 
}, ref) => {


  return (
    <img 
      className={classNames(styles.wrapper, className)} 
      ref={ref} 
      src={src} 
      alt={alt} 
      href={href}
      to={to}
      loading={loading}
      {...props} 
    >
    </img>
  )
})

export default Image;
