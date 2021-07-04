import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import Footer from 'component/Footer';
import PersonpageContent from 'component/PersonpageContent';
import PersonpageHeader from 'component/PersonpageHeader';


const cx = classNames.bind(styles);

const Personpage:React.FC = () => {
    return (
        <>
          <PersonpageHeader/>
          <PersonpageContent/>
          <Footer/>  
        </>
    )
}

export default Personpage;