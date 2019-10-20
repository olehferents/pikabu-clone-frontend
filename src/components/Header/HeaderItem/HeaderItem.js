import React from 'react';
import styles from './HeaderItem.module.css';

export default class HeaderItem extends React.Component {
    render() {
        return (
            <div className={styles.headerItem}>
                {this.props.name}
            </div>
        )
    }
}