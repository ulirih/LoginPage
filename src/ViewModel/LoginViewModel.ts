import {action, observable} from "mobx";
import {ILoginViewModel} from "./ILoginViewModel";
import {inject} from "react-ioc";
import {LoginService} from "../Services/LoginService";

export class LoginViewModel implements ILoginViewModel {
    //@inject loginService: LoginService;
    loginService: LoginService = new LoginService();

    @observable loginEnabled: boolean = false;
    @observable passwordEnabled: boolean = false;

    @observable inProgress: boolean = false;
    @observable isSuccessAuth?: boolean = undefined;

    private login: string = "";
    private password: string = "";

    @action
    loginChange = (login: string): void => {
        this.login = login;
        this.passwordEnabled = login.length > 0;
    };

    @action
    passwordChange = (password: string): void => {
        this.password = password;
        this.loginEnabled = password.length > 0;
    };

    @action
    doLogin(): void {
        this.inProgress = true;
        setTimeout(()=> {
            this.isSuccessAuth = this.loginService.login(this.login, this.password);
            this.inProgress = false;
        }, 1000);
    }
}