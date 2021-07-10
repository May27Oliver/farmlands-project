import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import ContentBox from 'component/ContentBox';
import Album from 'component/Album';

const cx = classNames.bind(styles);

interface SpeicespageContentType {
    selectedPic:string
}

const SpeicespageContent:React.FC<SpeicespageContentType> = ({
    selectedPic
}) => {
    return (
        <ContentBox classname={cx("speices-content")}>
            <div className={cx("speiceInfo-box")}>
                <div className={cx("speiceInfo-card")}>
                    <div className={cx("pic-selected")}>
                        <img src={selectedPic} alt="" />
                    </div>
                </div>
                <div className={cx("speiceInfo-card")}>
                    <div className={cx("relative-report")}></div>
                </div>
            </div>
            <Album/>
        </ContentBox>
    );
}

export default SpeicespageContent;