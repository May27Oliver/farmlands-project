import React,{useState,useEffect} from 'react';
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
    const [selectPic,setSelectPic] = useState<string>("")
    const history = useHistory();
    useEffect(()=>{
        if(selectPic !== ""){
            history.push({
                pathname:"./speciespage",
                search:"",
                state: selectPic
            })
        }
    },[selectPic])
    return (
        <div className={cx('album-content')}>
            <div className={cx('album-pic')}>
                {produceAlbum().map(item=>(
                    <img src={item} alt="Background" width="300" height="300" onClick={()=>setSelectPic(item)}/>
                ))}
            </div>
        </div>
    );
}

export default Album;