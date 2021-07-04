import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

const SidepageHeader:React.FC = ({children}) => {
    return (
        <div className={cx('side-page-header')}>
            {children}
        </div>
    );
}

export default SidepageHeader;