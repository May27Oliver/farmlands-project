import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import Footer from 'component/Footer';
import SpeicespageHeader from 'component/SpeicespageHeader';
import SpeicespageContent from 'component/SpeicespageContent';
import { 
    RouteComponentProps,
    useLocation
} from 'react-router-dom';

const cx = classNames.bind(styles);
const Speciespage:React.FC = () => {
    const { state } = useLocation<string>();
    console.log("state",state);
    return (
        <>
            <SpeicespageHeader/>
            <SpeicespageContent selectedPic={state}/>
            <Footer/>
        </>
    )
}

export default Speciespage;