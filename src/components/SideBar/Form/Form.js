import React from 'react';
import formStyle from './Form.module.css';

export default class Form extends React.Component {
   render() {
        if (this.props.isLogin === true) {
            return (
                <div className={formStyle.loginForm}>
                    <form>
                        <input type="text" name="login" placeholder="Логин"/>
                        <input type="text" name="password" placeholder="Пароль"/>
                        <button type="submit" className={formStyle.submitButton}>Войти</button>
                    </form>
                </div>
            )
        }
        return (
            <div className={formStyle.registerForm}>
                <form>
                    <input type="text" name="login" placeholder="Логин"/>
                    <input type="text" name="email" placeholder="E-mail"/>
                    <input type="text" name="password" placeholder="Пароль"/>
                    <button type="submit" className={formStyle.submitButton}>Создать аккаунт</button>
                </form>
            </div>
        );
    }
}