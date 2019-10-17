import React from 'react';
import sideBarStyle from './SideBar.module.css';
import Form from "./Form/Form";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            authTitle: 'Регистрация',
            switchFormTitle: 'Авторизация'
        };
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm() {
        if (this.state.isLogin === false) {
            this.setState(() => ({
                isLogin: true,
                authTitle: 'Авторизация',
                switchFormTitle: 'Регистрация'
            }));
        } else {
            this.setState(() => ({
                isLogin: false,
                authTitle: 'Регистрация',
                switchFormTitle: 'Авторизация'
            }));
        }
    }

    render() {
        return (
            <div>
                <div className={sideBarStyle.sideBar}>
                    <div className={sideBarStyle.authBlock}>
                        <div className={sideBarStyle.authHeader}>
                            <p>{this.state.authTitle}</p>
                        </div>
                        <div className={sideBarStyle.authContent}>
                            <Form isLogin={this.state.isLogin}/>
                            <p className={sideBarStyle.buttonChangeForm} onClick={() => this.changeForm()}>
                                {this.state.switchFormTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}