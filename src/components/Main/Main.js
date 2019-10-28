import React from 'react';
import styles from './Main.module.css';
import SideBar from "../SideBar/SideBar";
import FeedTitle from "./FeedTitle/FeedTitle";
import FeedContainer from "../../containers/FeedContainer/FeedContainer";

export default class Main extends React.Component {
    render() {
        return (
            <div className={styles.appInner}>
                <div className={styles.main}>
                    <FeedTitle/>
                    <FeedContainer/>
                </div>
                <SideBar />
            </div>
        )
    }
}