import React from 'react';
import headerItemStyle from './HeaderItem.module.css';

export default class HeaderItem extends React.Component {
    render() {
        return (
            <div className={headerItemStyle.headerItem}>
                {this.props.name}
            </div>
        )
    }
}