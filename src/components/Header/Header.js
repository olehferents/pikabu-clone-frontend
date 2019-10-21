import React from 'react';
import styles from './Header.module.css';
import HeaderItem from "./HeaderItem/HeaderItem";

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <HeaderItem name={'Новое'} link={'new'}/>
                    <HeaderItem name={'Лучшее'} link={'best'}/>
                    <HeaderItem name={'Моя лента'} link={'subs'}/>
                    <HeaderItem name={'Сообщества'} link={'communities'}/>
                </div>
            </div>
        )
    }
}