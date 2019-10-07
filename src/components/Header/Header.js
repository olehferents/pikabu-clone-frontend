import React from 'react';
import headerStyle from './Header.module.css';
import HeaderItem from "./HeaderItem/HeaderItem";

const categories = [
    'Новое', 'Лучшее', 'Моя лента', 'Сообщества'
];

export default class Header extends React.Component {
    render() {
        return (
            <div className={headerStyle.header}>
                <div className={headerStyle.headerWrapper}>
                    {categories.map((category, index) => (
                        <HeaderItem key={index} name={category.toUpperCase()}/>
                    ))}
                </div>
            </div>
        )
    }
}