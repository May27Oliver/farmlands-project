import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import Footer from 'component/Footer';
import SpeicespageHeader from 'component/SpeicespageHeader';
import SpeicespageContent from 'component/SpeicespageContent';

const cx = classNames.bind(styles);

const Speciespage:React.FC = () => {
    return (
        <>
            <SpeicespageHeader/>
            <SpeicespageContent/>
            <Footer/>
        </>
    )
}

export default Speciespage;