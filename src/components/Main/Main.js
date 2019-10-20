import React from 'react';
import mainStyle from './Main.module.css';
import SideBar from "../SideBar/SideBar";
import FeedTitle from "./FeedTitle/FeedTitle";
import FeedPost from "./FeedPost/FeedPost";

export default class Main extends React.Component {
    render() {
        return (
            <div className={mainStyle.appInner}>
                <div className={mainStyle.main}>
                    <FeedTitle/>
                    <FeedPost/>
                </div>
                <SideBar />
            </div>
        )
    }
}