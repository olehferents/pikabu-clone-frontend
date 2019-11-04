import React from 'react';
import styles from './FeedPost.module.css';

export default class FeedPost extends React.Component {
    render() {
        return (
            <div className={styles.postMain}>
                <div className={styles.postHeader}>
                    <p>{this.props.post.title}</p>
                </div>
                <div className={styles.postContent}>
                    <p>{this.props.post.content}</p>
                </div>
                <div className={styles.postTags}>
                    {this.props.post.tags.map(tag => {
                        return tag.name + " "
                    })}
                </div>
                <div className={styles.postFooter}>
                    <div className={styles.commentsLink}>
                        to comments
                    </div>
                    <div className={styles.postAuthor}>
                        {this.props.post.author}
                    </div>
                </div>
            </div>
        );
    }
}