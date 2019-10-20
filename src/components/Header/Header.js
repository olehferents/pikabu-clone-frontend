import React from 'react';
import styles from './Header.module.css';
import HeaderItem from "./HeaderItem/HeaderItem";
import { headerItems } from './../../common/headerItems';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    {headerItems.map((category, index) => (
                        <HeaderItem key={index} name={category.toUpperCase()}/>
                    ))}
                </div>
            </div>
        )
    }
}