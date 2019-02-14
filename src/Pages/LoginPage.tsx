import * as React from 'react';
import {observer} from "mobx-react";
import {LoginViewModel} from "../ViewModel/LoginViewModel";
import {Alert, Button, Form, Icon, Input} from "antd";
import "../App.css";
import {inject, provider} from "react-ioc";
const styles = require('./LoginPage.css');

@observer
export class LoginPage extends React.Component {
    //@inject loginViewModel: LoginViewModel;
    loginViewModel: LoginViewModel = new LoginViewModel();

    private onChangeLogin = (e: React.FormEvent<HTMLInputElement>): void => {
        this.loginViewModel.loginChange(e.currentTarget.value);
    };

    private onChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
        this.loginViewModel.passwordChange(e.currentTarget.value);
    };

    private onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.loginViewModel.doLogin()
    };

    render() {
        const {passwordEnabled, loginEnabled, inProgress, isSuccessAuth} = this.loginViewModel;

        return (
            <div className={styles.loginContainer}>
                <Form onSubmit={this.onSubmit} style={{width: 250}}>
                    <Form.Item>
                        <Input
                            placeholder="Username"
                            size={'large'}
                            onChange={this.onChangeLogin}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="password"
                            placeholder="Password"
                            size={'large'}
                            disabled={!passwordEnabled}
                            onChange={this.onChangePassword}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size={"large"}
                            disabled={!loginEnabled}
                            loading={inProgress}
                            block={true}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                {
                    isSuccessAuth != null ?
                    <Alert
                        message={isSuccessAuth ? "Success log in" : "Incorrect login or password"}
                        type={isSuccessAuth ? "success" : "error"}
                    />
                    : null
                }
            </div>
        );
    }
}