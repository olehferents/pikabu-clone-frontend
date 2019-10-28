import React from 'react';
import formStyle from "../Form.module.css";

export default class AuthError extends React.Component {
    render() {
        return (
            <div className={formStyle.error}>
                <span>{this.props.message}</span>
            </div>
        );
    }
}