import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import Footer from 'component/Footer';
import FarmpageContent from 'component/FarmpageContent';
import FarmpageHeader from 'component/FarmpageHeader';
import ContentBox from 'component/ContentBox';

const cx = classNames.bind(styles);

const Farmpage:React.FC = () => {
    return (
        <>
            <FarmpageHeader/>
            <FarmpageContent/>
            <Footer/>
        </>
    )
}

export default Farmpage;