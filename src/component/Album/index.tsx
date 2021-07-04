import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
import {useHistory} from 'react-router-dom';
const cx = classNames.bind(styles);


const produceAlbum:()=>string[] = () => {
    
    let picAlbum:string[] = [];
    for(let i = 32; i <= 40; i++){
        picAlbum=
            [
                ...picAlbum,
                require(`assets/img/collections-${i}.jpg`).default
            ]
    }
    return picAlbum;
}

const Album:React.FC = () => {
    const history = useHistory();
    return (
        <div className={cx('album-content')}>
            <div className={cx('album-pic')} onClick={()=>{history.push("./speciespage")}}>
                {produceAlbum().map(item=>(
                    <img src={item} alt="Background" width="300" height="300" />
                ))}
            </div>
        </div>
    );
}

export default Album;