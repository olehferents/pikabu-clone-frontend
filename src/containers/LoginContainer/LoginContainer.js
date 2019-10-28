import React from 'react';
import LoginForm from "../../components/SideBar/LoginForm/LoginForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signIn} from "../../actions/auth";

class LoginContainer extends React.Component {
    render() {
        return (
            <LoginForm accessToken={this.props.accessToken} signIn={this.props.signIn}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.accessToken
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: bindActionCreators(signIn, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);