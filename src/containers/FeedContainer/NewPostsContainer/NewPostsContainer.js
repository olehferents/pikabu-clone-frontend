import React from 'react';
import {bindActionCreators} from "redux";
import {getNewPosts} from "../../../actions/posts";
import {connect} from "react-redux";
import FeedPost from "../../../components/Main/FeedPost/FeedPost";

class NewPostsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.getNewPosts().then(response => this.setState({
            posts: response.posts
        })).catch();
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return <FeedPost post={post} key={post.id}/>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewPosts: bindActionCreators(getNewPosts, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostsContainer);