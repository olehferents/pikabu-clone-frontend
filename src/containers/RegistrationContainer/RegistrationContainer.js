import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signUp} from "../../actions/registration";
import RegistrationForm from "../../components/SideBar/RegistrationForm/RegistrationForm";

class RegistrationContainer extends React.Component {
    render() {
        return (
            <RegistrationForm response={this.props.response} signUp={this.props.signUp}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        response: state.registration.response
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: bindActionCreators(signUp, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);