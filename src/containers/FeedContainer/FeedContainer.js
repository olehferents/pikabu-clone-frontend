import React from 'react';
import {Route} from "react-router";
import NewPostsContainer from "./NewPostsContainer/NewPostsContainer";
import BestPostsContainer from "./BestPostsContainer/BestPostsContainer";
import SubsContainer from "./SubsContainer/SubsContainer";
import CommunitiesContainer from "./CommunitiesContainer/CommunitiesContainer";

export default class FeedContainer extends React.Component {
    render() {
        return (
            <div>
                <Route path='/new' exact component={NewPostsContainer}/>
                <Route path='/best' component={BestPostsContainer}/>
                <Route path='/subs' component={SubsContainer}/>
                <Route path='/communities' component={CommunitiesContainer}/>
            </div>
        );
    }
}