import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';
const cx = classNames.bind(styles);

interface ContentBoxType{
    classname?:string
}

const ContentBox:React.FC<ContentBoxType> = ({
    children,
    classname
}) => {
    return (
        <div className={cx('content-box',classname)}>
            {children}
        </div>
    );
}

export default ContentBox;