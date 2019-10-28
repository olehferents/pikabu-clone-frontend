import React from 'react';
import formStyle from "./../Form.module.css";

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className={formStyle.loginForm}>
                <form>
                    <input type="text" name="login" placeholder="Логин"/>
                    <input type="text" name="password" placeholder="Пароль"/>
                    <button type="submit" className={formStyle.submitButton}>Войти</button>
                </form>
            </div>
        );
    }
}