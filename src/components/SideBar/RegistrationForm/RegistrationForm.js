import React from 'react';
import formStyle from "./../Form.module.css";
import AuthError from "../AuthError/AuthError";

export default class RegistrationForm extends React.Component {
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
        this.props.signUp(formData.username, formData.email, formData.password);
    }

    render() {
        let error;
        if (this.props.response.success === false) {
            error = <AuthError message={this.props.response.message}/>;
        } else {
            error = <div/>
        }
        return (
            <div className={formStyle.registerForm}>
                {error}
                <form onSubmit={this.handleSubmit}>
                    <input ref="username" type="text" name="username" placeholder="Логин"/>
                    <input ref="email" type="text" name="email" placeholder="E-mail"/>
                    <input ref="password" type="password" name="password" placeholder="Пароль"/>
                    <button type="submit" className={formStyle.submitButton}>Создать аккаунт</button>
                </form>
            </div>
        );
    }
}