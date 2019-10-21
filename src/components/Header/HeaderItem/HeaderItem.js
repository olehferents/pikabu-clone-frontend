import React from 'react';
import styles from './HeaderItem.module.css';
import {NavLink} from 'react-router-dom';

export default class HeaderItem extends React.Component {
    render() {
        return (
            <div className={styles.headerItem}>
                <NavLink to={this.props.link} activeClassName={styles.active}>
                    {this.props.name.toUpperCase()}
                </NavLink>
            </div>
        )
    }
}