import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import HomepageHeader from 'component/homepageHeader';
import HomepageContent from 'component/HomepageContent';
import Footer from 'component/Footer';


const cx = classNames.bind(styles);

const Homepage:React.FC = () => {
    return (
        // <HomepageHeader/>
        <div className={cx('home-page')}>
            <HomepageHeader/>
            <HomepageContent/>
            <Footer/>
        </div>
    );
}

export default Homepage;