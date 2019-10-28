import React from 'react';
import formStyle from "./../Form.module.css";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        this.props.signIn(formData.usernameOrEmail, formData.password);
    }

    render() {
        return (
            <div className={formStyle.loginForm}>
                <form onSubmit={this.handleSubmit}>
                    <input ref="usernameOrEmail" type="text" name="login" placeholder="Логин"/>
                    <input ref="password" type="password" name="password" placeholder="Пароль"/>
                    <button type="submit" className={formStyle.submitButton}>Войти</button>
                </form>
            </div>
        );
    }
}