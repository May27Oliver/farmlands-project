import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import HomepageHeader from 'component/homepageHeader';
import HomepageContent from 'component/HomepageContent';
import Footer from 'component/Footer';
import {RouteComponentProps} from 'react-router-dom';

const cx = classNames.bind(styles);

interface RouteParams{
    path:string
}

const Homepage:React.FC<RouteComponentProps<RouteParams>> = () => {
    return (
        <div className={cx('home-page')}>
            <HomepageHeader/>
            <HomepageContent/>
            <Footer/>
        </div>
    );
}

export default Homepage;