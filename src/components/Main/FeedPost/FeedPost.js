import React from 'react';
import styles from './FeedPost.module.css';

export default class FeedPost extends React.Component {
    render() {
        return (
            <div className={styles.postMain}>
                <div className={styles.postHeader}>
                    <p>Title</p>
                </div>
                <div className={styles.postContent}>
                    <p>Content</p>
                </div>
                <div className={styles.postTags}>
                    <p>Tags</p>
                </div>
                <div className={styles.postFooter}>
                    <div className={styles.postComments}>
                        Comments
                    </div>
                    <div className={styles.postAuthor}>
                        Author
                    </div>
                </div>
            </div>
        );
    }
}