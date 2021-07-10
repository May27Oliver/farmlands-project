import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import ContentBox from 'component/ContentBox';
import Album from 'component/Album';

const cx = classNames.bind(styles);

const SidepageContent:React.FC = () => {
    return (
        <ContentBox classname={cx('farm-content')}>
            <Mapbox/>       
            <Album/>
        </ContentBox>
    );
}

const Mapbox:React.FC = () => {
    return(
        <div className={cx("map-box")}>
            <div className={cx("map-icon-box")}>
                <div className={cx("map-icon")}></div>
            </div>
            <div className={cx("map-info-box")}>
                <div className={cx("location")}>
                    田園位置：宜蘭員山
                    <a href="https://www.inaturalist.org/projects/cb218e40-a6ce-4547-b29b-b84619353ae4?tab=observations&subtab=map">google map</a>
                </div>
                <div className={cx("geographic-info")}>水稻田</div>
                <div className={cx("map-project")}>耕作者：農田裡的科學計畫</div>
            </div>
        </div>
    )
}

export default SidepageContent; 