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

        </div>
    )
}

export default SidepageContent; 