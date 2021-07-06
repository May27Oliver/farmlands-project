import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import ContentBox from 'component/ContentBox';
import Album from 'component/Album';
import personalPic from 'assets/img/collections-08.png';

const cx = classNames.bind(styles);

const SidepageContent:React.FC = () => {
    return (
        <ContentBox classname={cx("person-content")}>
            <Personfile/>
            <Album/>
        </ContentBox>
    );
}

const Personfile:React.FC = () => {
    return(
        <div className={cx("personfile-box")}>
            <div className={cx("personfile-left-info")}>
                <div className={cx("personal-pic")}>
                    <img src={personalPic} alt="" />
                </div>
            </div>
            <div className={cx("personfile-right-info")}>
                <div className={cx("personal-name")}>Over Lin</div>
                <div className={cx("personal-info-card")}>
                    <div className={cx("personal-level")}>等級：level 3</div>
                    <div className={cx("personal-capture-number")}>蒐集物種數量：132</div>
                    <div className={cx("personal-link")}>
                        <a href="">Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidepageContent;