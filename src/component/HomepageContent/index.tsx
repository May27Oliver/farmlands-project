import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';

const cx = classNames.bind(styles);

const HomepageContent:React.FC = () => {
    return (
        <div className={cx('homepage-content')}>
            <div className={cx('content-box')}>
                <div className={cx("main-box-title")}>News !!</div>
                <div className={cx("content-box-main-item")}>
                    <div className={cx("main-pic")}></div>
                </div>
                <div className={cx('main-pic-notes')}>
                    ++ Over Lin的新蒐集，物種：高蹺鴴，地點：宜蘭員山
                </div>
                <div className={cx("content-box-item")}>
                    <div className={cx("box-item")}>
                        <div className={cx("box-item-left")}></div>
                        <div className={cx('box-item-notes')}>MORE FARMLAND</div>
                    </div>
                    <div className={cx("box-item")}>
                        <div className={cx("box-item-right")}></div>
                        <div className={cx('box-item-notes')}>MORE COLLECTOR</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomepageContent;