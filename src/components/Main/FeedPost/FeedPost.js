import React from 'react';
import style from './FeedPost.module.css';

export default class FeedPost extends React.Component {
    render() {
        return (
            <div className={style.postMain}>
                <div className={style.postHeader}>
                    <p>Title</p>
                </div>
                <div className={style.postContent}>
                    <p>Content</p>
                </div>
                <div className={style.postTags}>
                    <p>Tags</p>
                </div>
                <div className={style.postFooter}>
                    <div className={style.postComments}>
                        Comments
                    </div>
                    <div className={style.postAuthor}>
                        Author
                    </div>
                </div>
            </div>
        );
    }
}