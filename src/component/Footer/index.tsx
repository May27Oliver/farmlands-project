import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

const Footer:React.FC = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer-pic')}>
                <div className={cx('footer-pic-note')}>copyright by my collections book:creatures in farmlands</div>
            </div>
        </div>
    );
}

export default Footer;