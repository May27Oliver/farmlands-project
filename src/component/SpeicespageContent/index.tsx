import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import ContentBox from 'component/ContentBox';
import Album from 'component/Album';

const cx = classNames.bind(styles);

const SpeicespageContent:React.FC = () => {
    return (
        <ContentBox classname={cx("speices-content")}>
            <SpeiceInfo/>
            <Album/>
        </ContentBox>
    );
}

const SpeiceInfo:React.FC = () => {
    return(
        <div className={cx("speiceInfo-box")}>
            <div className={cx("speiceInfo-card")}>
                <div className={cx("pic-selected")}></div>
            </div>
            <div className={cx("speiceInfo-card")}>
                <div className={cx("relative-report")}></div>
            </div>
        </div>
    )
}

export default SpeicespageContent;